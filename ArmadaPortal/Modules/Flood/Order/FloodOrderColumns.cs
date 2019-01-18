namespace ArmadaPortal.Flood.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("ArmadaPortal.FloodOrder")]
    [BasedOnRow(typeof(Entities.FloodOrderRow), CheckNames = false)]
    public class FloodOrderColumns
    {
        [Ignore, Hidden()]
        public String OrderId { get; set; }
        [Ignore, Hidden()]
        public String OrderAccountId { get; set; }
        [Ignore, Hidden()]
        public String BranchId { get; set; }

        [FilterOnly, QuickFilter]
        public FloodOrderDetStatusTypeEnum FloodOrderStatus { get; set; }

        [EditLink, Width(100)]
        public String OrderNumber { get; set; }
        [Width(80)]
        public DateTime? OrderDate { get; set; }

        [Width(100)]
        public String FloodOrderStatusDescription { get; set; }
        [Width(250)]
        public String Borrower { get; set; }
        [Width(100)]
        public String LoanNumber { get; set; }
        [Width(400)]
        public String AddressEnteredFormatted { get; set; }
        [Width(75)]
        public String FloodZone { get; set; }
    }
}   