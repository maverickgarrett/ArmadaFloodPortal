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

        [EditLink, AlignRight]
        public String OrderNumber { get; set; }
        public DateTime? OrderDate { get; set; }

        public String FloodOrderStatusDescription { get; set; }
        public String Borrower { get; set; }
        public String LoanNumber { get; set; }
        [Width(250)]
        public String AddressEnteredFormatted { get; set; }
        [Width(25)]
        public String FloodZone { get; set; }
    }
}   