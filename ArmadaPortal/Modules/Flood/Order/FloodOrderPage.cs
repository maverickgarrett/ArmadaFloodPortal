using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ArmadaPortal.Common;

namespace ArmadaPortal.Flood.Pages
{
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;
    using ArmadaPortal.Flood.Entities;
    using Serenity;
    using System.Web.Mvc;
    using Views = MVC.Views.Flood.Order;


    [Authorize, RoutePrefix("Flood/Order"), Route("{action=index}")]
    public partial class FloodOrderController : Controller
    {
        private IOrderRepository _orderRepository;
        private IAccountRepository _accountRepository;
        private IUserRepository _userRepository;

        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;

        public FloodOrderController()
        {
            _orderRepository = new OrderRepository();
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();

            _accountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
            _branchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
            //AllyMaster
            _orderedByContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
            //AlleyMaster
            //_orderContactId = new Guid("f71d0106-4ebd-e811-a963-000d3a310e39"); 
            //sandralovesjessie@test.com
            _orderContactId = new Guid("6f3a2eeb-4abd-e811-a963-000d3a310e39");

        }

        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("FloodOrderDashboardPageModel", TimeSpan.FromMinutes(5),
                FloodOrderRow.Fields.GenerationKey, () =>
                {
                    var floodOrderDashboardCount = _orderRepository.GetFloodOrderDashboard(_accountId);

                    var model = new FloodOrderDashboardPageModel();
                    model.NewOrders = floodOrderDashboardCount.NewOrders;
                    model.OrdersInProgress = floodOrderDashboardCount.OrdersInProgress;
                    model.CompletedOrders = floodOrderDashboardCount.CompletedOrders;
                    model.IssueOrOnHoldOrders = floodOrderDashboardCount.IssueOrOnHoldOrders;
                    model.TotalOrders = floodOrderDashboardCount.TotalOrders;

                    try
                    {
                        var newOrdersCalc = (double)(model.NewOrders / model.TotalOrders) * 100;
                        model.NewOrdersPct = newOrdersCalc.ToString("00");

                        var ordersInProgressCalc = (double)(model.OrdersInProgress / model.TotalOrders) * 100;
                        model.OrdersInProgressPct = ordersInProgressCalc.ToString("00");

                        var issueorholdorderscalc = (double)(model.IssueOrOnHoldOrders / model.TotalOrders) * 100;
                        model.IssueOrOnHoldOrdersPct = issueorholdorderscalc.ToString("00");

                        var completedorderscalc = (double)(model.CompletedOrders / model.TotalOrders) * 100;
                        model.NewOrdersPct = completedorderscalc.ToString("00");
                    }

                    catch (DivideByZeroException)
                    {
                    }

                    return model;
                });

            return View(Views.FloodOrderIndex, cachedModel);
        }


    }

    public class FloodOrderDashboardPageModel
    {
        public int DraftCount { get; set; }
        public int OrderedCount { get; set; }
        public int AssignedCount { get; set; }
        public int ReviewCount { get; set; }
        public int CompletedCount { get; set; }
        public int OnHoldCount { get; set; }
        public int IssuesCount { get; set; }
        public int TotalOrderCount { get; set; }

        public FloodOrderDashboardPageModel()
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