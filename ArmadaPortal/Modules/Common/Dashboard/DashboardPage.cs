
namespace ArmadaPortal.Common.Pages
{
    using ArmadaPortal.Flood.Entities;
    using ArmadaPortal.Core.Models;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;
    using ArmadaPortal.Flood.Pages;
    using MVC;
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        private IOrderRepository _orderRepository;
        private IAccountRepository _accountRepository;
        private IUserRepository _userRepository;

        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;

        public DashboardController(IOrderRepository orderRepository, IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _orderRepository = new OrderRepository();
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();
        }


        public DashboardController()
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

        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var floodOrderDashboardCount = _orderRepository.GetFloodOrderDashboard(_accountId);
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("FloodOrderDashboardPageModel", TimeSpan.FromMinutes(5),
                FloodOrderRow.Fields.GenerationKey, () =>
                {
                    var model = new FloodOrderDashboardPageModel();

                    if (floodOrderDashboardCount != null)
                    {
                        model.DraftCount = floodOrderDashboardCount.DraftCount;
                        model.AssignedCount = floodOrderDashboardCount.AssignedCount;
                        model.OrderedCount = floodOrderDashboardCount.OrderedCount;
                        model.ReviewCount = floodOrderDashboardCount.ReviewCount;
                        model.CompletedCount = floodOrderDashboardCount.CompletedCount;
                        model.IssuesCount = floodOrderDashboardCount.IssuesCount;
                        model.TotalOrderCount = floodOrderDashboardCount.TotalOrderCount;
                    }
                    try
                    {
                        //var newOrdersCalc = (double)(model.NewOrders / model.TotalOrders) * 100;
                        //model.NewOrdersPct = newOrdersCalc.ToString("00");

                        //var ordersInProgressCalc = (double)(model.OrdersInProgress / model.TotalOrders) * 100;
                        //model.OrdersInProgressPct = ordersInProgressCalc.ToString("00");

                        //var issueorholdorderscalc = (double)(model.IssueOrOnHoldOrders / model.TotalOrders) * 100;
                        //model.IssueOrOnHoldOrdersPct = issueorholdorderscalc.ToString("00");

                        //var completedorderscalc = (double)(model.CompletedOrders / model.TotalOrders) * 100;
                        //model.NewOrdersPct = completedorderscalc.ToString("00");
                    }

                    catch (DivideByZeroException)
                    {
                    }

                    return model;
                });

            return View(Views.Flood.Order.FloodOrderIndex, cachedModel);
        }
    }
}
