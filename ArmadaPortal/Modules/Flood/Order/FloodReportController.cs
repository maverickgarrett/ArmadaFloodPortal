using Newtonsoft.Json;
using Serenity;
using Serenity.PropertyGrid;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Text;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using System.Web.Security;
using ArmadaPortal.Core.Repositories;
using ArmadaPortal.Data.Repositories;

namespace ArmadaPortal
{
    [RoutePrefix("FloodReport"), Route("{action=index}")]
    public class FloodReportController : Controller
    {
        private IOrderRepository _orderRepository;

        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;

        public FloodReportController()
        {
            _orderRepository = new OrderRepository();
            _accountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
            _branchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
            //AllyMaster
            _orderedByContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
            //AlleyMaster
            //_orderContactId = new Guid("f71d0106-4ebd-e811-a963-000d3a310e39"); 
            //sandralovesjessie@test.com
            _orderContactId = new Guid("6f3a2eeb-4abd-e811-a963-000d3a310e39");

        }

        public ActionResult GetFloodOrderDeterminationLetter(string orderId, bool download = false)
        {
            return this.ExecuteFloodDeterminationLetter(orderId, download);
        }

        public ActionResult GetDocumentById(string documentId, bool download = false)
        {
            return this.ExecuteDocumentRetrieve(documentId, download);
        }

        private ActionResult ExecuteFloodDeterminationLetter(string reqOrderId, bool download = false)
        {
            //find the first doc marked exposed to portal
            var orderId = Guid.Parse(reqOrderId);
            var myPdfDoc = _orderRepository.GetFloodDeterminationLetterForOrderId(orderId);

            if (myPdfDoc == null)
            {
                throw DataValidation.ArgumentNull("Flood Determination Letter not found for this order");
            }

            if (myPdfDoc.Data == null)
            {
                throw DataValidation.ArgumentNull("Flood Determination Letter not found for this order");
            }
            byte[] bytes = new byte[] { };
            string fileName = "FloodDeterminationLetter.pdf";
            if (myPdfDoc?.Data != null)
            {
                bytes = myPdfDoc.Data.ByteArray;
            }

            if (download)
            {
                return new FileContentResult(bytes, "application/octet-stream")
                {
                    FileDownloadName = fileName
                };
            }

            var cd = new ContentDisposition
            {
                Inline = true,
                FileName = fileName
            };

            Response.AddHeader("Content-Disposition", cd.ToString());
            return File(bytes, UploadHelper.GetMimeType(fileName));
        }
        private ActionResult ExecuteDocumentRetrieve(string reqDocumentId, bool download = false)
        {
            //find the first doc marked exposed to portal
            var documentId = Guid.Parse(reqDocumentId);
            var myPdfDoc = _orderRepository.GetAttachmentByAnnotationId(documentId);

            if (myPdfDoc == null)
            {
                throw DataValidation.ArgumentNull("There was a problem retrieving the document");
            }

            if (myPdfDoc.Data == null)
            {
                throw DataValidation.ArgumentNull("There was a problem retrieving the document");
            }
            byte[] bytes = new byte[] { };
            string fileName = myPdfDoc.Meta.Name;
                if (myPdfDoc?.Data != null)
                {
                    bytes = myPdfDoc.Data.ByteArray;
                }

                if (download)
                {
                    return new FileContentResult(bytes, "application/octet-stream")
                    {
                        FileDownloadName = fileName
                    };
                }

                var cd = new ContentDisposition
                {
                    Inline = true,
                    FileName = fileName
                };

                Response.AddHeader("Content-Disposition", cd.ToString());
                return File(bytes, UploadHelper.GetMimeType(fileName));
        }



    }
}