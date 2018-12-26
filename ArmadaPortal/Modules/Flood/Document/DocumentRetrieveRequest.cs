namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Flood.Entities;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using MyRow = ArmadaPortal.Flood.Entities.DocumentRow;

    public class DocumentRetrieveRequest : RetrieveRequest
    {
        public String AccountId { get; set; }
        public String OrderId { get; set; }
        public String DocumentId { get; set; }

    }




}