
namespace ArmadaPortal
{
    using Serenity.Services;
    using System;
    using System.Collections.Generic;

    public class DocumentImportRequest : ServiceRequest
    {
        public string OrderId { get; set; }
        public string UploadDocument { get; set; }
    }

    public class DocumentImportResponse : ServiceResponse
    {
        public int Inserted { get; set; }
        public int Updated { get; set; }
        public List<string> ErrorList { get; set; }
    }
}