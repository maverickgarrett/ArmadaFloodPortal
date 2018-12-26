namespace ArmadaPortal.Flood
{
    using Serenity.Services;
    using System;

    public class FloodOrderListRequest : ListRequest
    {
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public Guid? BranchId { get; set; }
        public int? OrderStatusGrouping { get; set; }
    }
}