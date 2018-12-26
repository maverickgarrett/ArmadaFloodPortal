namespace ArmadaPortal.Flood
{
    using Serenity.Services;
    using System;

    public class DocumentListRequest : ListRequest
    {
        public String AccountId { get; set; }
        public String OrderId { get; set; }
    }
}