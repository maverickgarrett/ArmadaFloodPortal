namespace ArmadaPortal.Flood.Endpoints
{
    using System.Reflection;
    using ArmadaPortal.Core.Models;
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRow = ArmadaPortal.Flood.Entities.FloodOrderRow;
    using Serenity;
    using System.IO;
    using XrmLibrary.EntityHelpers.Utils;
    using Newtonsoft.Json.Linq;
    using Newtonsoft.Json;
    using System.Web.Script.Serialization;

    [RoutePrefix("Services/Flood/Order"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class FloodOrderController : ServiceEndpoint
    {
        private IOrderRepository _orderRepository;
        private IAccountRepository _accountRepository;
        private IUserRepository _userRepository;

        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;


        public FloodOrderController(IOrderRepository orderRepository, IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _orderRepository = new OrderRepository();
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();
        }


        public FloodOrderController()
        {
            _orderRepository = new OrderRepository();
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();

            _accountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
            _branchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
            //AllyMaster
            _orderedByContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
            //AlleyMaster
            //_orderContactId = new Guid("f71d0106-4ebd-e811-a963-000d3a310e39"); 
            //sandralovesjessie@test.com
            _orderContactId = new Guid("6f3a2eeb-4abd-e811-a963-000d3a310e39");

        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, FloodOrderSaveRequest request)
        {
            //return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            return CreateOrder(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return this.UpdateOrder(uow, request);
        }

        private SaveResponse UpdateOrder(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var retResponse = new SaveResponse();
            var order = new FloodOrder();
            order.OrderId = Guid.Parse(request.EntityId.ToString());
            CopyOrderEditViewModelToOrder(request, order);
            order.IsNew = false;

            var success = _orderRepository.Update(order);
            retResponse.EntityId = order.OrderId;

            return retResponse;

        }



        private SaveResponse CreateOrder(IUnitOfWork uow, FloodOrderSaveRequest request)
        {
            var retResponse = new SaveResponse();

            var order = new FloodOrder();
            CopyOrderViewModelToOrder(request, order);
            order.IsNew = true;
            var orderId = _orderRepository.SaveCommit(order);

            retResponse.EntityId = orderId;
            return retResponse;

        }



        public ListResponse<MyRow> List(IDbConnection connection, FloodOrderListRequest request)
        {
            return this.List(request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, FloodOrderRetrieveRequest request)
        {
            return this.Retrieve(request);
        }

        private RetrieveResponse<MyRow> Retrieve(FloodOrderRetrieveRequest request)
        {
            var response = new RetrieveResponse<MyRow>();
            var myOrder = new MyRow();

            request.CheckNotNull();
            if (request.EntityId == null)
            {
                throw DataValidation.RequiredError("entityId", null);
            }

            Guid orderId;
            Guid.TryParse(request.EntityId.ToString(), out orderId);

            var baseCrmOrder = _orderRepository.GetOrderById(orderId);
            var attachments = _orderRepository.GetAttachmentsForOrderId(orderId);


            if (baseCrmOrder == null)
            {
                throw DataValidation.EntityNotFoundError(myOrder,request.EntityId);
            }


            if (baseCrmOrder != null && !string.IsNullOrEmpty(baseCrmOrder.OrderId.ToString()))
            {
                myOrder = new MyRow
                {
                    OrderNumber = baseCrmOrder.OrderNumber,
                    OrderId = baseCrmOrder.OrderId.Value.ToString(),
                    OrderDate = baseCrmOrder.OrderDate,
                    IsUrgent = baseCrmOrder.IsRush,
                    OrderAccountName = baseCrmOrder.Account.AccountName,
                    BranchName = baseCrmOrder.BranchAccount.BranchName,
                    Borrower = baseCrmOrder.Borrower,
                    Borrower2 = baseCrmOrder.Borrower2,
                    BranchId = baseCrmOrder.BranchAccount.BranchAccountId.Value.ToString(),
                    BranchAbbrev = baseCrmOrder.BranchAccount.Abbreviation,
                    OrderAccountId = baseCrmOrder.Account.AccountId.Value.ToString(),
                    LoanType = (FloodOrderLoanTypeEnum?)baseCrmOrder.LoanTypeId,
                    LoanNumber = baseCrmOrder.LoanNumber,
                    OrderType = (FloodOrderTypeEnum?)baseCrmOrder.OrderTypeId,
                    OrderContactName = baseCrmOrder.OrderContact.FullName,
                    OrderContactId = baseCrmOrder.OrderContact.UserId.ToString(),
                    OrderCreatedByName = baseCrmOrder.OrderedBy.FullName,
                    OrderCreatedById = baseCrmOrder.OrderedBy.UserId.ToString(),
                    EmailCertTo = baseCrmOrder.NotifyEmailTo,
                    EmailCertCC = baseCrmOrder.NotifyEmailCC,
                    AddressEnteredFormatted = baseCrmOrder.AddressEntered.AddressFormatted,
                    AddressMatchedFormatted = baseCrmOrder.AddressMatched.AddressFormatted,
                    Address1Orig = baseCrmOrder.AddressEntered.Address1,
                    Address2Orig = baseCrmOrder.AddressEntered.Address2,
                    CityOrig = baseCrmOrder.AddressEntered.City,
                    StateOrig = baseCrmOrder.AddressEntered.State,
                    ZipOrig = baseCrmOrder.AddressEntered.Zip,
                    Address1Matched = baseCrmOrder.AddressMatched.Address1,
                    Address2Matched = baseCrmOrder.AddressMatched.Address2,
                    CityMatched = baseCrmOrder.AddressMatched.City,
                    StateMatched = baseCrmOrder.AddressMatched.State,
                    ZipMatched = baseCrmOrder.AddressMatched.Zip,
                    FloodOrderStatus = (FloodOrderDetStatusTypeEnum?)baseCrmOrder.DeterminationStatusId,
                    FloodOrderStatusDate = baseCrmOrder.DeterminationDate,
                    FloodOrderStatusDescription = baseCrmOrder.DeterminationStatusDescription,
                    FloodZone = baseCrmOrder.FloodZone,
                    ParcelNumber = baseCrmOrder.ParcelNumber,
                    NoteToAnalyst = baseCrmOrder.NotesToAnalyst,
                    InsertDate = baseCrmOrder.InsertDate,
                    ModifiedDate = baseCrmOrder.ModifiedDate,
                };
            }


  

            response.Entity = myOrder;
            return response;
        }

        private ListResponse<MyRow> List(FloodOrderListRequest request)
        {
            var response = new ListResponse<MyRow>();
            ////Retrieve the current contact
            //_crmUserId = _userRepsitory.RetrieveMyIdByIdentifier();

            var returnCrmOrders = new List<FloodOrder>();
            var floodOrderProperties = typeof(FloodOrder).GetProperties();
            var baseCrmOrders = _orderRepository.GetAllOrdersForAccount(_accountId);

            var sortField = request.Sort != null ? request.Sort.FirstOrDefault() : null;
            var searchField = request.ContainsField;
            var searchText = request.ContainsText;

            if (!string.IsNullOrEmpty(searchText))
            {
                baseCrmOrders = _orderRepository.GetAllOrdersForAccountSearch(_accountId, searchField, searchText.Trim());
            }
            else if (sortField !=null && sortField.Field !=null)
            {
                    switch (sortField.Field)
                    {
                        case "OrderNumber":
                            baseCrmOrders = _orderRepository.GetAllOrdersForAccountWithSort(_accountId, "OrderNumber", sortField.Descending);
                            break;
                        case "OrderDate":
                            baseCrmOrders = _orderRepository.GetAllOrdersForAccountWithSort(_accountId, "OrderDate", sortField.Descending);
                            break;
                        case "FloodOrderStatusDescription":
                            baseCrmOrders = _orderRepository.GetAllOrdersForAccountWithSort(_accountId, "FloodDetStatus", sortField.Descending);
                            break;
                        case "LoanNumber":
                            baseCrmOrders = _orderRepository.GetAllOrdersForAccountWithSort(_accountId, "LoanNumber", sortField.Descending);
                            break;
                        case "Borrower":
                            baseCrmOrders = _orderRepository.GetAllOrdersForAccountWithSort(_accountId, "Borrower", sortField.Descending);
                            break;
                        case "AddressEnteredFormatted":
                            baseCrmOrders = _orderRepository.GetAllOrdersForAccountWithSort(_accountId, "Address1Orig", sortField.Descending);
                            break;
                    }

            }

            baseCrmOrders = baseCrmOrders.Skip(request.Skip).Take(request.Take);
            returnCrmOrders = baseCrmOrders.ToList();


            var orderList = returnCrmOrders
                   .Select(x => new MyRow
                   {
                       OrderNumber = x.OrderNumber,
                       OrderId = x.OrderId.Value.ToString(),
                       OrderDate = x.OrderDate,
                       IsUrgent = x.IsRush,
                       OrderAccountName = x.Account.AccountName,
                       BranchName = x.BranchAccount.BranchName,
                       Borrower = x.Borrower,
                       Borrower2 = x.Borrower2,
                       BranchId = x.BranchAccount.BranchAccountId.Value.ToString(),
                       BranchAbbrev = x.BranchAccount.Abbreviation,
                       OrderAccountId = x.Account.AccountId.Value.ToString(),
                       LoanType = (FloodOrderLoanTypeEnum?)x.LoanTypeId,
                       LoanNumber = x.LoanNumber,
                       OrderType = (FloodOrderTypeEnum?)x.OrderTypeId,
                       OrderContactName = x.OrderContact.FullName,
                       OrderContactId = x.OrderContact.UserId.ToString(),
                       OrderCreatedByName = x.OrderedBy.FullName,
                       OrderCreatedById = x.OrderedBy.UserId.ToString(),
                       EmailCertTo = x.NotifyEmailTo,
                       EmailCertCC = x.NotifyEmailCC,
                       AddressEnteredFormatted = x.AddressEntered.AddressFormatted,
                       AddressMatchedFormatted = x.AddressMatched.AddressFormatted,
                       Address1Orig = x.AddressEntered.Address1,
                       Address2Orig = x.AddressEntered.Address2,
                       CityOrig = x.AddressEntered.City,
                       StateOrig = x.AddressEntered.State,
                       ZipOrig = x.AddressEntered.Zip,
                       Address1Matched = x.AddressMatched.Address1,
                       Address2Matched = x.AddressMatched.Address2,
                       CityMatched = x.AddressMatched.City,
                       StateMatched = x.AddressMatched.State,
                       ZipMatched = x.AddressMatched.Zip,
                       FloodOrderStatus = (FloodOrderDetStatusTypeEnum?)x.DeterminationStatusId,
                       FloodOrderStatusDate = x.DeterminationDate,
                       FloodOrderStatusDescription = x.DeterminationStatusDescription,
                       FloodZone = x.FloodZone,
                       InsertDate = x.InsertDate,
                       ModifiedDate = x.ModifiedDate,
                   });


            request.CheckNotNull();

            int totalRecords = orderList.ToList().Count();
            var totalPages = (int)Math.Ceiling((float)totalRecords / (float)request.Take);
            response.TotalCount = totalRecords;
            response.Skip = request.Skip;
            response.Take = request.Take;
            response.Entities = orderList.ToList();

            return response;
        }

        private void CopyOrderEditViewModelToOrder(SaveRequest<MyRow> orderViewModel, FloodOrder order)
        {
            order.NotifyEmailTo = orderViewModel.Entity.EmailCertTo;
            order.NotifyEmailCC = orderViewModel.Entity.EmailCertCC;
            order.Borrower = orderViewModel.Entity.Borrower;
            order.LoanNumber = orderViewModel.Entity.LoanNumber;
            order.NotesToAnalyst = orderViewModel.Entity.NoteToAnalyst;
        }


        private void CopyOrderViewModelToOrder(FloodOrderSaveRequest orderViewModel, FloodOrder order)
        {
            order.OrderTypeId = (int?)orderViewModel.OrderType;
            order.LoanTypeId = (int?)orderViewModel.LoanType;

            order.NotifyEmailTo = orderViewModel.EmailCertTo;
            order.NotifyEmailCC = orderViewModel.EmailCertCC;
            order.Borrower = orderViewModel.Borrower;
            order.LoanNumber = orderViewModel.LoanNumber;
            order.ParcelNumber = orderViewModel.ParcelNumber;
            order.IsRush = orderViewModel.IsUrgent;
            order.AddressEntered = new OrderAddress
            {
                Address1 = orderViewModel.Address1Orig,
                Address2 = orderViewModel.Address2Orig,
                City = orderViewModel.CityOrig,
                State = orderViewModel.StateOrig,
                Zip = orderViewModel.ZipOrig
            };

            order.NotesToAnalyst = orderViewModel.NoteToAnalyst;
            order.Account = new OrderAccount { AccountId = _accountId };
            order.AccountId = _accountId;

            order.BranchAccount = new BranchAccount { BranchAccountId = _branchId };
            order.BranchId = _branchId;

            order.OrderDate = DateTime.UtcNow;
            order.OrderedBy = new User { UserId = _orderedByContactId };
            order.OrderContact = new User { UserId = _orderContactId };
            order.CustomerUploadFiles = new List<DownloadLink>();

            if (!string.IsNullOrEmpty(orderViewModel.UploadDocument))
            {
                var uploadLoadFiles = ParseAndValidate(orderViewModel.UploadDocument, "UploadDocument");

                foreach (var uploadfile in uploadLoadFiles)
                {
                    // Download the attachment in the current execution folder.
                    using (FileStream fileStream = new FileStream(UploadHelper.DbFilePath(uploadfile.Filename), FileMode.Open, FileAccess.Read))
                    {
                        order.CustomerUploadFiles.Add(new DownloadLink { 
                                    Title = uploadfile.Filename,
                                    FileContent = AttachmentHelper.CreateFromStream(fileStream, uploadfile.OriginalName)
                        });
                    }
                }
            }

        }
        private UploadedFile[] ParseAndValidate(string json, string key)
        {
            json = json.TrimToNull();

            if (json != null && (!json.StartsWith("[") || !json.EndsWith("]")))
                throw new ArgumentOutOfRangeException(key);

            var list = JSON.Parse<UploadedFile[]>(json ?? "[]");

            if (list.Any(x => string.IsNullOrEmpty(x.Filename)) ||
                list.GroupBy(x => x.Filename.Trim()).SelectMany(x => x.Skip(1)).Any())
                throw new ArgumentOutOfRangeException(key);

            return list;
        }


        private class MySaveHandler : SaveRequestHandler<MyRow>
        {

            protected override void BeforeSave()
            {
                base.BeforeSave();

                var uploadedDocument = Request.Entity.UploadDocument;
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                var uploadedDocument = Request.Entity.UploadDocument;
            }
        }

    }





}