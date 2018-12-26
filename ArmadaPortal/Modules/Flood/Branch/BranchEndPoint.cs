namespace ArmadaPortal.Flood.Endpoints
{
    using System.Reflection;
    using ArmadaPortal.Core.Models;
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Web.Mvc;
    using MyRow = ArmadaPortal.Flood.Entities.BranchRow;


    [ConnectionKey(typeof(MyRow))]
    [RoutePrefix("Services/Flood/Branch"), Route("{action}")]
    [ServiceAuthorize]

    public class BranchController : ServiceEndpoint
    {
        private IOrderRepository _orderRepository;
        private IAccountRepository _accountRepository;
        private IUserRepository _userRepository;

        private Guid _accountId;
        private Guid _branchId;
        private Guid _orderedByContactId;
        private Guid _orderContactId;


        public BranchController(IOrderRepository orderRepository, IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _orderRepository = new OrderRepository();
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();
        }


        public BranchController()
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


        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return this.List(request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return this.Retrieve(request);
        }

        private RetrieveResponse<MyRow> Retrieve(RetrieveRequest request)
        {
            var response = new RetrieveResponse<MyRow>();
            ////Retrieve the current contact
            //_crmUserId = _userRepsitory.RetrieveMyIdByIdentifier();
            var baseCrmBranch = _accountRepository.GetBranchByBranchId(_branchId);

            var returnCrmBranch = new MyRow();

            if (baseCrmBranch!=null && !String.IsNullOrEmpty(baseCrmBranch.BranchName))
            {
                returnCrmBranch = new MyRow
                {
                    BranchId = baseCrmBranch.BranchAccountId.Value.ToString(),
                    BranchAbbrev = baseCrmBranch.Abbreviation,
                    BranchName = baseCrmBranch.BranchName
                };
            }

            response.Entity = returnCrmBranch;
            return response;
        }

        private ListResponse<MyRow> List(ListRequest request)
        {
            var response = new ListResponse<MyRow>();
            ////Retrieve the current contact
            //_crmUserId = _userRepsitory.RetrieveMyIdByIdentifier();
            var baseCrmBranches = _accountRepository.GetBranchesForCompany(_accountId);

            var returnCrmBranches = new List<MyRow>();

            foreach (var branch in baseCrmBranches)
            {
                returnCrmBranches.Add(new MyRow
                {
                    BranchId = branch.BranchAccountId.Value.ToString(),
                    BranchAbbrev = branch.Abbreviation,
                    BranchName = branch.BranchName
                });
            }

            response.Entities = returnCrmBranches;
            response.TotalCount = baseCrmBranches.Count();
            return response;
        }

    }
}