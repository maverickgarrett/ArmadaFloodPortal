using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using ArmadaPortal.Data;
using ArmadaPortal.Core.Converters;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core.Repositories;
using AutoMapper;
using Microsoft.Xrm.Sdk;
using XrmLibrary.EntityHelpers.Annotation;
using XrmLibrary.EntityHelpers.Utils;
using ArmadaPortal.Core;
using Sasha.Exceptions;
using Sasha.ExtensionMethods;
using Microsoft.Xrm.Sdk.Query;
using OrderType = ArmadaPortal.Core.OrderType;

namespace ArmadaPortal.Data.Repositories
{

    public class OrderRepository : IOrderRepository
    {
        private readonly CrmContext _crmContext;
        private readonly XrmServiceContext _xrm;
        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;
        private string _orderedByEmailAddress;

        public OrderRepository()
        {
            if (_crmContext == null)
            {
                _crmContext = new CrmContext();
                _xrm = _crmContext.XrmServiceContext;
                _accountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
                _branchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
                _orderedByContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
                _orderContactId = new Guid("f71d0106-4ebd-e811-a963-000d3a310e39");
                _orderedByEmailAddress = "dsanderson@armadaanalytics.com";
            }
        }

        public OrderRepository(CrmContext crmContext)
        {
            _crmContext = crmContext;
            _xrm = crmContext.XrmServiceContext;

            _accountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
            _branchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
            _orderedByContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
            _orderContactId = new Guid("f71d0106-4ebd-e811-a963-000d3a310e39");
        }

        public OrderRepository(CrmContext crmContext, Guid accountId)
        {
            _crmContext = crmContext;
            _xrm = _crmContext.XrmServiceContext;
            _accountId = accountId;
            _branchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
            _orderedByContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
            _orderContactId = new Guid("f71d0106-4ebd-e811-a963-000d3a310e39");
        }

        public bool Update(FloodOrder order)
        {
            var retStatus = true;

            var crmFloodOrder = _xrm.FloodRiskOrderSet.Where(x => x.Id == order.OrderId.Value).FirstOrDefault();

            if (crmFloodOrder != null)
            {
                crmFloodOrder.Branch = new EntityReference(Account.EntityLogicalName, _branchId);
                crmFloodOrder.UrgentIndicator = order.IsRush.HasValue ? order.IsRush : false;
                //crmFloodOrder.EmailCertTo = order.NotifyEmailTo;
                crmFloodOrder.EmailCertCC = order.NotifyEmailCC;
                crmFloodOrder.FloodOrderContactId = new EntityReference(Contact.EntityLogicalName, _orderContactId);
                crmFloodOrder.Borrower = order.Borrower;
                //crmFloodOrder.BorrowerNameAdditional = order.Borrower2;
                crmFloodOrder.LoanNumber = order.LoanNumber;
                crmFloodOrder.AdditionalInformation = order.NotesToAnalyst;
                _xrm.UpdateObject(crmFloodOrder);
                _xrm.SaveChanges();
            }

            return retStatus;

        }

        public Guid SaveDocument(FloodOrderDocument documentUpload)
        {
            var returnOrderId = documentUpload.OrderId.Value;
            var returnDocumentId = Guid.NewGuid();

            if (documentUpload.CustomerUploadFiles != null && documentUpload.CustomerUploadFiles.Count() > 0)
            {
                try
                {
                    var FloodDocumentAddition = new FloodRiskOrderDocument
                    {
                        Id = returnDocumentId,
                        ShowinPortal = true,
                        FloodRiskOrder = new EntityReference(FloodRiskOrder.EntityLogicalName, returnOrderId),
                        DocumentType = DocumentType.CustomerUploaded,
                        Name = "Customer Uploaded Documents"
                    };

                    _xrm.AddObject(FloodDocumentAddition);
                    _xrm.SaveChanges();
                }
                catch (Exception ex)
                {
                    var error = ex.InnerException;
                    var errorMessage = ex.Message;
                }

                foreach (var doc in documentUpload.CustomerUploadFiles)
                {
                    var returnAnnotationId = Guid.NewGuid();

                    try
                    {
                        var AttachmentAddition = new Annotation
                        {
                            Id = returnAnnotationId,
                            IsDocument = true,
                            MimeType = doc.FileContent.Meta.MimeType,
                            ObjectId = new EntityReference(FloodRiskOrderDocument.EntityLogicalName, returnDocumentId),
                            FileName = doc.FileContent.Meta.Name,
                            DocumentBody = doc.FileContent.Data.Base64
                        };

                        _xrm.AddObject(AttachmentAddition);
                        _xrm.SaveChanges();
                    }
                    catch (Exception ex)
                    {
                        var error = ex.InnerException;
                        var errorMessage = ex.Message;
                    }
                }
            }

            return returnDocumentId;
        }

        public Guid SaveCommit(FloodOrder order)
        {
            var floodRiskOrder = MapFloodOrdertoCRMFloodRiskOrder(order);
            var returnOrderId = floodRiskOrder.Id;
            _xrm.AddObject(floodRiskOrder);
            _xrm.SaveChanges();

            if (order.CustomerUploadFiles != null && order.CustomerUploadFiles.Count() > 0)
            {
                var returnDocumentId = Guid.NewGuid();
                try
                {
                    var FloodDocumentAddition = new FloodRiskOrderDocument
                    {
                        Id = returnDocumentId,
                        ShowinPortal = true,
                        FloodRiskOrder = new EntityReference(FloodRiskOrder.EntityLogicalName, returnOrderId),
                        DocumentType = DocumentType.CustomerUploaded,
                        Name = "Customer Uploaded Documents"
                    };

                    _xrm.AddObject(FloodDocumentAddition);
                    _xrm.SaveChanges();
                }
                catch (Exception ex)
                {
                    var error = ex.InnerException;
                    var errorMessage = ex.Message;
                }

                foreach (var doc in order.CustomerUploadFiles)
                {
                    var returnAnnotationId = Guid.NewGuid();

                    try
                    {
                        var AttachmentAddition = new Annotation
                        {
                            Id = returnAnnotationId,
                            IsDocument = true,
                            MimeType = doc.FileContent.Meta.MimeType,
                            ObjectId = new EntityReference(FloodRiskOrderDocument.EntityLogicalName, returnDocumentId),
                            FileName = doc.FileContent.Meta.Name,
                            DocumentBody = doc.FileContent.Data.Base64
                        };

                        _xrm.AddObject(AttachmentAddition);
                        _xrm.SaveChanges();
                    }
                    catch (Exception ex)
                    {
                        var error = ex.InnerException;
                        var errorMessage = ex.Message;
                    }
                }
            }
            return returnOrderId;
        }

        public FloodRiskOrder MapFloodOrdertoCRMFloodRiskOrder(FloodOrder order)
        {
            var floodRiskOrder = new FloodRiskOrder();

            if (order.IsNew)
            {
                floodRiskOrder.Id = Guid.NewGuid();
                floodRiskOrder.FloodDetStatus = FloodDeterminationStatus.Ordered;
            }
            floodRiskOrder.Account = new EntityReference(Account.EntityLogicalName, order.AccountId.Value);
            floodRiskOrder.Branch = new EntityReference(Account.EntityLogicalName, order.BranchId.Value);
            floodRiskOrder.UrgentIndicator = order.IsRush ?? false;
            floodRiskOrder.EmailCertTo = _orderedByEmailAddress;
                //order.NotifyEmailTo;
            floodRiskOrder.EmailCertCC = order.NotifyEmailCC;
            floodRiskOrder.OrderedBy = new EntityReference(Contact.EntityLogicalName, _orderedByContactId);
            floodRiskOrder.FloodOrderContactId = new EntityReference(Contact.EntityLogicalName, _orderContactId);
            floodRiskOrder.OrderDate = DateTime.UtcNow;
            if (order.OrderTypeId.HasValue)
            {
                floodRiskOrder.OrderType = (OrderType)order.OrderTypeId.Value;
            }
            if (order.LoanTypeId.HasValue)
            {
                floodRiskOrder.LoanType = (LoanType)order.LoanTypeId.Value;
            }
            floodRiskOrder.Borrower = order.Borrower;
            floodRiskOrder.BorrowerNameAdditional = order.Borrower2;
            floodRiskOrder.LoanNumber = order.LoanNumber;
            floodRiskOrder.AdditionalInformation = order.NotesToAnalyst;
            floodRiskOrder.Address1Orig = order.AddressEntered.Address1;
            floodRiskOrder.Address2Orig = order.AddressEntered.Address2;
            floodRiskOrder.CityOrig = order.AddressEntered.City;
            floodRiskOrder.StateOrig = order.AddressEntered.State;
            floodRiskOrder.ZipOrig = order.AddressEntered.Zip;
            floodRiskOrder.AddressLegalNumber = order.ParcelNumber;


            var parentAccountRecord = _xrm.AccountSet.Where(x => x.Id == order.AccountId.Value).FirstOrDefault();
            
            if (parentAccountRecord!=null && !string.IsNullOrEmpty(parentAccountRecord.FloodComplianceNote))
            {
                floodRiskOrder.ComplianceNotes = parentAccountRecord.FloodComplianceNote;
            }


            return floodRiskOrder;
        }


        //Only Allow Certain fields to change on edit
        public FloodRiskOrder MapFloodOrderEditToCRMFloodRiskOrder(FloodRiskOrder floodRiskOrder, FloodOrder orderedit)
        {
            return floodRiskOrder;
        }
        public void Add(FloodOrder order)
        {
            var floodRiskOrder = MapFloodOrdertoCRMFloodRiskOrder(order);
            _xrm.AddObject(floodRiskOrder);
        }

        public void Delete(FloodOrder order)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<FloodOrder> GetAllOrdersForAccount()
        {
            var orders =
                (from c in _xrm.FloodRiskOrderSet
                 where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                 && c.Account.Id == _accountId
                 orderby c.ModifiedOn descending
                 select new FloodOrder(c)
                );
            return orders;
        }

        public IEnumerable<FloodOrder> GetAllOrdersForAccount(Guid accountId)
        {
            var orders =
                (from c in _xrm.FloodRiskOrderSet
                 where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                 && c.Account.Id == accountId
                 orderby c.ModifiedOn descending
                 select new FloodOrder(c)
                );
            return orders;
        }

        public IEnumerable<FloodOrder> GetAllOrdersForAccountWithStatusFilter(Guid accountId, string statusFilter = "")
        {
            var orders =
            (from c in _xrm.FloodRiskOrderSet
            where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
            && c.Account.Id == accountId
            orderby c.ModifiedOn descending
            select new FloodOrder(c)
            );

            if (!string.IsNullOrEmpty(statusFilter) && statusFilter != "0")
            {
                var statusFilterId = 0;
                var statusFilterConvertSuccess = int.TryParse(statusFilter, out statusFilterId);

                if (statusFilterConvertSuccess)
                {
                    orders = (from c in _xrm.FloodRiskOrderSet
                              where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                              && c.Account.Id == accountId
                              && c.FloodDetStatus.Value == (FloodDeterminationStatus)statusFilterId
                              orderby c.ModifiedOn descending
                              select new FloodOrder(c)
                    );
                }
            }

            return orders;
        }

        public IEnumerable<FloodOrder> GetAllOrdersForAccountSearch(Guid accountId, string fieldName, string searchString, string statusFilter = "")
        {
            var orders =
                (from o in _xrm.FloodRiskOrderSet
                 where o.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                 && o.Account.Id == accountId
                 select o);

            if (!string.IsNullOrEmpty(statusFilter) && statusFilter != "0")
            {
                var statusFilterId = 0;
                var statusFilterConvertSuccess = int.TryParse(statusFilter, out statusFilterId);

                if (statusFilterConvertSuccess) {
                    orders = (from c in _xrm.FloodRiskOrderSet
                              where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                              && c.Account.Id == accountId
                              && c.FloodDetStatus == (FloodDeterminationStatus)statusFilterId
                              select c);
                }
            }

            if (string.IsNullOrEmpty(fieldName) && !string.IsNullOrEmpty(searchString))
            {
                var searchText = searchString.Trim();
                orders = (from c in orders
                         where c.OrderNumber.Contains(searchText)
                                || c.LoanNumber.Contains(searchText)
                                || c.Borrower.Contains(searchText)
                                || c.FullEnteredAddressFormatted.Contains(searchText)
                                select c);
            }

            var retOrders = from c in orders select new FloodOrder(c);

            return retOrders;
        }

        public IEnumerable<FloodOrder> GetAllOrdersForAccountWithSort(Guid accountId, string fieldName, bool sortDesc, string statusFilter = "")
        {
            var orders =
                (from c in _xrm.FloodRiskOrderSet
                 where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                 && c.Account.Id == accountId
                 select c);

            if (!string.IsNullOrEmpty(statusFilter) && statusFilter != "0")
            {
                var statusFilterId = 0;
                var statusFilterConvertSuccess = int.TryParse(statusFilter, out statusFilterId);

                if (statusFilterConvertSuccess)
                {
                    orders = (from c in _xrm.FloodRiskOrderSet
                     where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
                     && c.Account.Id == accountId
                     && c.FloodDetStatus == (FloodDeterminationStatus)statusFilterId
                     select c);

                }
            }

            switch (fieldName)
            {

                case "OrderNumber":
                    if (sortDesc)
                    {
                        orders = orders.OrderByDescending(x => x.OrderNumber);
                    }
                    else
                    {
                        orders = orders.OrderBy(x => x.OrderNumber);
                    }

                    break;
                case "OrderDate":
                    if (sortDesc)
                    {
                        orders = orders.OrderByDescending(x => x.OrderDate);
                    }
                    else
                    {
                        orders = orders.OrderBy(x => x.OrderDate);
                    };
                    break;
                case "FloodDetStatus":
                    if (sortDesc)
                    {
                        orders = orders.OrderByDescending(x => x.FloodDetStatus);
                    }
                    else
                    {
                        orders = orders.OrderBy(x => x.FloodDetStatus);
                    };
                    break;
                case "LoanNumber":
                    if (sortDesc)
                    {
                        orders = orders.OrderByDescending(x => x.LoanNumber);
                    }
                    else
                    {
                        orders = orders.OrderBy(x => x.LoanNumber);
                    };
                    break;
                case "Borrower":
                    if (sortDesc)
                    {
                        orders = orders.OrderByDescending(x => x.Borrower);
                    }
                    else
                    {
                        orders = orders.OrderBy(x => x.Borrower);
                    };
                    break;
                case "Address1Orig":
                    if (sortDesc)
                    {
                        orders = orders.OrderByDescending(x => x.Address1Orig);
                    }
                    else
                    {
                        orders = orders.OrderBy(x => x.Address1Orig);
                    };
                    break;
            };

            var retOrders = from c in orders select new FloodOrder(c);

            return retOrders;
        }

        public FloodOrder GetOrderById(Guid orderId)
        {
           var order =
               (from c in _xrm.FloodRiskOrderSet
                where c.FloodRiskOrderStatusCode == (int)FloodRiskOrderStatus.Active
                && c.Account.Id == _accountId
                && c.Id == orderId
                select new FloodOrder(c)
               ).FirstOrDefault();
            return order;
        }

        public FloodOrder GetOrderByNumber(string orderNumber)
        {
            var order =
              (from c in _xrm.FloodRiskOrderSet
               where c.FloodRiskOrderStatusCode.Equals(FloodRiskOrderStatus.Active)
               && c.Account.Id == _accountId
               && c.OrderNumber.Contains(orderNumber.Trim())
               orderby c.ModifiedOn descending
               select new FloodOrder(c)
              ).FirstOrDefault();

            return order;
        }

        public AttachmentData GetAttachmentByAnnotationId(Guid annotationId)
        {
            var returnAttachment = new AttachmentData();

            var file =
                (from c in _xrm.AnnotationSet.Where(x => x.Id == annotationId && x.IsDocument == true)
                 select c).FirstOrDefault();

            var fileName = "";
            var documentBody = "";
            var subject = "";
            var mimeType = "";

            if (file != null)
            {
                subject = file.Subject ?? null;
                fileName = file.FileName ?? null;
                documentBody = file.DocumentBody ?? null;
                mimeType = file.MimeType ?? null;
            }
            

            if (!string.IsNullOrEmpty(documentBody))
            {
                returnAttachment = AttachmentHelper.CreateFromBase64(documentBody, fileName);
            }
            return returnAttachment;
        }

        public AttachmentData GetAttachmentByReferenceId(Guid objectId)
        {
            var returnAttachment = new AttachmentData();

            var file =
                (from c in _xrm.AnnotationSet.Where(x => x.ObjectId.Id == objectId && x.IsDocument == true)
                 select c).ToList().FirstOrDefault();

            var fileName = "";
            var documentBody = "";
            var subject = "";
            var mimeType = "";

            if (file != null)
            {
                subject = file.Subject ?? null;
                fileName = file.FileName ?? null;
                documentBody = file.DocumentBody ?? null;
                mimeType = file.MimeType ?? null;
            }


            if (!string.IsNullOrEmpty(documentBody))
            {
                returnAttachment = AttachmentHelper.CreateFromBase64(documentBody, fileName);
            }
            return returnAttachment;
        }

        public IEnumerable<AttachmentData> GetAttachmentsForOrderId(Guid orderId)
        {
            var returnAttachments = new List<AttachmentData>();

            var files =
                (from c in _xrm.FloodRiskOrderDocumentSet
                 where c.FloodRiskOrder.Id == orderId
                 && c.ShowinPortal == true
                 select c).ToList();

            foreach (var file in files)
            {
                returnAttachments.Add(GetAttachmentByReferenceId(file.Id));
            }
            
            return returnAttachments;
        }

        public AttachmentData GetFloodDeterminationLetterForOrderId(Guid orderId)
        {
            var returnAttachment = new AttachmentData();

            var documentHeader =
                (from c in _xrm.FloodRiskOrderDocumentSet
                 where c.FloodRiskOrder.Id == orderId
                 && c.ShowinPortal == true
                 && c.DocumentType.Value == DocumentType.FloodDeterminationLetter
                 orderby c.ModifiedOn descending
                 select c).FirstOrDefault();

            if (documentHeader !=null && !string.IsNullOrEmpty(documentHeader.Id.ToString()))
            {
                var documentAttachmentList =
                    (from c in _xrm.AnnotationSet.Where(x => x.ObjectId.Id == documentHeader.Id && x.IsDocument == true)
                     select c).FirstOrDefault();

                if (documentAttachmentList != null && !string.IsNullOrEmpty(documentAttachmentList.Id.ToString()))
                {
                    returnAttachment = GetAttachmentByReferenceId(documentAttachmentList.Id);
                }
            }

            return returnAttachment;

        }

        public void SaveChanges()
        {
            _xrm.SaveChanges();
            _xrm.ClearChanges();
        }

        public IEnumerable<DownloadLink> GetDocumentListByOrderId(Guid orderId)
        {
            var returnLinks = new List<DownloadLink>();

            var documentHeaderList =
                (from c in _xrm.FloodRiskOrderDocumentSet.Where(x => x.FloodRiskOrder.Id == orderId && x.ShowinPortal == true)
                 select c).ToList();

            //For each document header. There may be multiple attachments

            foreach (var documentHeader in documentHeaderList)
            {
                var documentHeaderId = documentHeader.Id;
                var documentType = documentHeader.DocumentType.ToString();
                var createdOn = documentHeader.CreatedOn;
                var modifiedOn = documentHeader.ModifiedOn;

                var documentAttachmentList =
                    (from c in _xrm.AnnotationSet.Where(x => x.ObjectId.Id == documentHeaderId && x.IsDocument == true)
                     select c).ToList();

                if (documentAttachmentList != null && documentAttachmentList.Count() > 0)
                {
                    foreach (var document in documentAttachmentList)
                    {
                        var retDocument = new DownloadLink();
                        retDocument.DocumentId = document.Id.ToString();
                        retDocument.DocumentType = documentHeader.DocumentType.Value.ToString();
                        retDocument.AltText = documentHeader.Name + "" + document.FileName;
                        retDocument.Title = document.FileName;
                        retDocument.InsertDate = document.CreatedOn.Value;
                        retDocument.ModifiedDate = document.ModifiedOn.Value;
                        retDocument.FileName = document.FileName;
                        retDocument.FileSize = document.FileSize;
                        returnLinks.Add(retDocument);
                    }
                }
            }

            return returnLinks;
        }

        public DownloadLink GetDocumentById(Guid documentId)
        {
            var returnLink = new DownloadLink();

            var documentHeader =
                (from c in _xrm.FloodRiskOrderDocumentSet.Where(x => x.Id == documentId && x.ShowinPortal == true)
                 select c).ToList().FirstOrDefault();

            var file =
                (from c in _xrm.AnnotationSet.Where(x => x.ObjectId.Id == documentId && x.IsDocument == true)
                 select c).ToList().FirstOrDefault();

            var fileName = "";
            var documentBody = "";
            var subject = "";
            var mimeType = "";

            if (file != null && documentHeader != null)
            {
                subject = file.Subject ?? null;
                fileName = file.FileName ?? null;
                documentBody = file.DocumentBody ?? null;
                mimeType = file.MimeType ?? null;
            }

            if (!string.IsNullOrEmpty(documentBody))
            {
                returnLink.DocumentId = file.Id.ToString();
                returnLink.DocumentType = documentHeader.DocumentType.Value.ToString();
                returnLink.AltText = documentHeader.Name;
                returnLink.Title = documentHeader.Name;
                returnLink.InsertDate = file.CreatedOn.Value;
                returnLink.ModifiedDate = file.ModifiedOn.Value;
            }
            return returnLink;
        }

        public FloodOrderDashboard GetFloodOrderDashboard(Guid accountId)
        {
            var returnDashboard = new FloodOrderDashboard();

            var fetchData = new
            {
                statuscode = "1",
                aai_account = accountId
            };
            var fetchXml = $@"
            <fetch aggregate='true' returntotalrecordcount='true'>
              <entity name='aai_floodriskorder'>
                <attribute name='aai_flooddeterminationstatus' alias='floodstatus_name' groupby='true' />
                <attribute name='aai_floodriskorderid' alias='order_count' aggregate='count' />
                <filter type='and'>
                  <condition attribute='statuscode' operator='eq' value='{fetchData.statuscode}'/>
                  <condition attribute='aai_account' operator='eq' value='{fetchData.aai_account}'/>
                </filter>
              </entity>
            </fetch>";


            EntityCollection orderStatusGroupCount = _crmContext.WebProxyClient.RetrieveMultiple(new FetchExpression(fetchXml));

            foreach (var resultCount in orderStatusGroupCount.Entities)
            {
                var FloodStatusOptionSetValue = (OptionSetValue)((AliasedValue)resultCount["floodstatus_name"]).Value;
                var FloodStatusCount = (Int32)((AliasedValue)resultCount["order_count"]).Value;

                switch (FloodStatusOptionSetValue.Value)
                {
                    case (int)FloodDeterminationStatus.Draft:
                        returnDashboard.NewOrders += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;
                    case (int)FloodDeterminationStatus.Ordered:
                        returnDashboard.NewOrders += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;
                    case (int)FloodDeterminationStatus.Assigned:
                        returnDashboard.OrdersInProgress += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;

                    case (int)FloodDeterminationStatus.Issue:
                        returnDashboard.IssueOrOnHoldOrders += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;
                    case (int)FloodDeterminationStatus.OnHold:
                        returnDashboard.IssueOrOnHoldOrders += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;
                    case (int)FloodDeterminationStatus.Review:
                        returnDashboard.IssueOrOnHoldOrders += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;
                    case (int)FloodDeterminationStatus.Completed:
                        returnDashboard.CompletedOrders += FloodStatusCount;
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;

                    default:
                        returnDashboard.TotalOrders += FloodStatusCount;
                        break;

                }

            }

            return returnDashboard;
        }
    }

}