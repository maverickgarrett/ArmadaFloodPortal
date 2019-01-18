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
    using MyRow = ArmadaPortal.Flood.Entities.DocumentRow;
    using Serenity;
    using System.IO;
    using XrmLibrary.EntityHelpers.Utils;

    [RoutePrefix("Services/Flood/Document"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DocumentController : ServiceEndpoint
    {
        private IOrderRepository _orderRepository;
        private IAccountRepository _accountRepository;
        private IUserRepository _userRepository;

        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderId;
        private Guid _documentId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;


        public DocumentController(IOrderRepository orderRepository, IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _orderRepository = new OrderRepository();
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();
        }


        public DocumentController()
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
            _orderId = Guid.Empty;
            _documentId = Guid.Empty;

        }

        public ListResponse<MyRow> List(IDbConnection connection, DocumentListRequest request)
        {
            return this.List(request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, DocumentRetrieveRequest request)
        {
            return this.Retrieve(request);
        }

        private RetrieveResponse<MyRow> Retrieve(DocumentRetrieveRequest request)
        {
            var retrieveResponse = new RetrieveResponse<MyRow>();
            var returnDocument = new DownloadLink();
            var documentProperties = typeof(DownloadLink).GetProperties();

            _documentId = Guid.Parse(request.DocumentId);

            var baseDocument = _orderRepository.GetDocumentById(_documentId);

            if (baseDocument != null && !string.IsNullOrEmpty(baseDocument.DownloadUrl))
            {
                retrieveResponse.Entity.DocumentId = request.DocumentId;
                retrieveResponse.Entity.DocumentType = baseDocument.DocumentType;
                retrieveResponse.Entity.DocumentName = baseDocument.Title;
                retrieveResponse.Entity.DocumentUrl = baseDocument.DownloadUrl;
                retrieveResponse.Entity.InsertDate = baseDocument.InsertDate;
                retrieveResponse.Entity.ModifiedDate = baseDocument.ModifiedDate;
            }
            return retrieveResponse;
        }

        private ListResponse<MyRow> List(DocumentListRequest request)
        {
            var response = new ListResponse<MyRow>();
            ////Retrieve the current contact
            //_crmUserId = _userRepsitory.RetrieveMyIdByIdentifier();

            request.CheckNotNull();

            if (string.IsNullOrEmpty(request.OrderId))
            {
                var reqOrderIdFilter = request.EqualityFilter["OrderId"];
                if (reqOrderIdFilter != null && reqOrderIdFilter.HasValue())
                {
                    request.OrderId = request.EqualityFilter["OrderId"] as string;
                }

                if (string.IsNullOrEmpty(request.OrderId))
                {
                    return response;
                }
            }
            var returnDocuments = new List<DownloadLink>();
            var returnDocumentRowList = new List<MyRow>();
            var totalRecords = 0;
            var totalPages = 0;

            if (!string.IsNullOrWhiteSpace(request.OrderId))
            {
                _orderId = Guid.Parse(request.OrderId);
                var baseDocuments = _orderRepository.GetDocumentListByOrderId(_orderId).ToList();

                var sortField = request.Sort != null ? request.Sort.FirstOrDefault() : null;
                var searchField = request.ContainsField;
                var searchText = request.ContainsText;

                foreach (var baseDocument in baseDocuments)
                {
                    var newRow = new MyRow();
                    newRow.DocumentId = baseDocument.DocumentId;
                    newRow.DocumentType = baseDocument.DocumentType;
                    newRow.DocumentTitle = baseDocument.Title;
                    newRow.DocumentUrl = baseDocument.DownloadUrl;
                    newRow.InsertDate = baseDocument.InsertDate;
                    newRow.ModifiedDate = baseDocument.ModifiedDate;
                    newRow.DocumentName = baseDocument.Title;
                    returnDocumentRowList.Add(newRow);

                }
                totalRecords = baseDocuments.ToList().Count();
                totalPages = (int)Math.Ceiling((float)totalRecords / (float)request.Take);
                response.TotalCount = totalRecords;
                response.Skip = request.Skip;
                response.Take = request.Take;
                response.Entities = returnDocumentRowList.ToList();
            }
            else
            {
                response.TotalCount = 0;
                response.Skip = 0;
                response.Take = 0;
                response.Entities = returnDocumentRowList;
            }

            return response;
        }

        [HttpPost]
        public DocumentImportResponse Create(IUnitOfWork uow, DocumentImportRequest request)
        {
            //return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            return CreateDocument(uow, request);
        }

        [HttpPost]
        public DocumentImportResponse DocumentImport(IUnitOfWork uow, DocumentImportRequest request)
        {
            //return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            return CreateDocument(uow, request);
        }

        private DocumentImportResponse CreateDocument(IUnitOfWork uow, DocumentImportRequest request)
        {
            var response = new DocumentImportResponse();
            response.ErrorList = new List<string>();

            try
            {
                var floodOrderDocument = new FloodOrderDocument();
                floodOrderDocument.OrderId = Guid.Parse(request.OrderId);
                floodOrderDocument.IsNew = true;
                floodOrderDocument.CustomerUploadFiles = new List<DownloadLink>();


                var uploadLoadFiles = ParseAndValidate(request.UploadDocument, "UploadDocument");

                foreach (var uploadfile in uploadLoadFiles)
                {
                    // Download the attachment in the current execution folder.
                    using (FileStream fileStream = new FileStream(UploadHelper.DbFilePath(uploadfile.Filename), FileMode.Open, FileAccess.Read))
                    {
                        floodOrderDocument.CustomerUploadFiles.Add(new DownloadLink
                        {
                            Title = uploadfile.OriginalName,
                            AltText = uploadfile.OriginalName,
                            FileContent = AttachmentHelper.CreateFromStream(fileStream, uploadfile.OriginalName)
                        });
                    }
                }
                var documentHeaderId = _orderRepository.SaveDocument(floodOrderDocument);
            }
            catch (Exception ex)
            {
                response.ErrorList.Add("Exception on Document Row " + ": " + ex.Message);
            }

            response.Inserted = response.Inserted + 1;
            return response;
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


    }


}