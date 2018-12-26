using AutoMapper.Configuration.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ArmadaPortal.Core.Models
{
    public class FloodOrderDashboard
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

        public FloodOrderDashboard()
        {
            NewOrders = 0;
            NewOrdersPct = "0%";

            OrdersInProgress = 0;
            OrdersInProgressPct = "0%";

            CompletedOrders = 0;
            CompletedOrdersPct = "0%";

            IssueOrOnHoldOrders = 0;
            IssueOrOnHoldOrdersPct = "0%";

            TotalOrders = 0;

        }
    }


}
