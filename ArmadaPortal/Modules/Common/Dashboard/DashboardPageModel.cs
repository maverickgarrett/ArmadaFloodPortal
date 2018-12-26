
namespace ArmadaPortal.Common
{
    public class DashboardPageModel
    {
        public int NewOrders { get; set; }
        public string NewOrdersPct { get; set; }
        public int OrdersInProgress { get; set; }
        public string OrdersInProgressPct { get; set; }

        public int CompletedOrders { get; set; }
        public string CompletedOrdersPct { get; set; }
        public int IssueOrOnHoldOrders { get; set; }
        public string IssueOrOnHoldOrdersPct { get; set; }
        public int TotalOrders { get; set; }
    }
}