using AutoMapper.Configuration.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ArmadaPortal.Core.Models
{
    public class FloodOrderDashboard
    {
        public int DraftCount { get; set; }
        public int OrderedCount { get; set; }
        public int AssignedCount { get; set; }
        public int ReviewCount { get; set; }
        public int CompletedCount { get; set; }
        public int OnHoldCount { get; set; }
        public int IssuesCount { get; set; }
        public int TotalOrderCount { get; set; }

        public FloodOrderDashboard()
        {
            DraftCount = 0;
            OrderedCount = 0;
            AssignedCount = 0;
            ReviewCount = 0;
            CompletedCount = 0;
            OnHoldCount = 0;
            IssuesCount = 0;
            TotalOrderCount = 0;
        }
    }
}



