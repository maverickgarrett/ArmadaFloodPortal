namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Flood.Entities;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using MyRow = ArmadaPortal.Flood.Entities.FloodOrderRow;

    public class FloodOrderDeterminationLetterRequest : RetrieveRequest
    {
        public String OrderId { get; set; }
    }

    public class FloodOrderDeterminationLetterResponse : ServiceResponse
    {
        public int IsValid { get; set; }
        public List<string> ErrorList { get; set; }
    }



}

