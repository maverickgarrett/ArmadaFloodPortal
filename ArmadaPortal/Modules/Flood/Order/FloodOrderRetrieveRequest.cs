namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Flood.Entities;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using MyRow = ArmadaPortal.Flood.Entities.FloodOrderRow;

    public class FloodOrderRetrieveRequest : RetrieveRequest
    {
        public String OrderId { get; set; }
        public String UploadDocumentFileName { get; set; }
        //public DateTime? StartDate { get; set; }
        //public DateTime? EndDate { get; set; }
        //public Guid? BranchId { get; set; }
    }




}