using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using ArmadaPortal.Data;
using ArmadaPortal.Core.Converters;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core.Repositories;
using AutoMapper;

namespace ArmadaPortal.Data.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly CrmContext _crmContext;

        public AccountRepository()
        {
            if (_crmContext == null)
            {
                _crmContext = new CrmContext();
            }

        }
        public AccountRepository(CrmContext crmContext)
        {
            _crmContext = crmContext;
        }

        public IList<BranchAccount> GetBranchesForCompany(Guid parentCustomerId)
        {
            var crmAccountQuery = _crmContext.XrmServiceContext.BranchSet.Where(x => x.AccountBranchParentAccountId.Id == parentCustomerId).ToList();

            var customerBranches = new List<BranchAccount>();

            if (crmAccountQuery != null)
            {
                foreach (var accountBranch in crmAccountQuery)
                {
                    customerBranches.Add(
                        new BranchAccount
                        {
                            BranchAccountId = accountBranch.BranchId,
                            BranchName = accountBranch.BranchName
                        }
                    );
                }
            }
            return customerBranches;
        }

        public BranchAccount GetBranchByBranchId(Guid id)
        {
            var crmAccountQuery = _crmContext.XrmServiceContext.AccountSet.Where(x => x.Id == id).FirstOrDefault();

            var branch = new BranchAccount();

            if (crmAccountQuery != null)
            {
                branch.BranchAccountId = crmAccountQuery.Id;
                branch.BranchName = crmAccountQuery.Name;
                branch.Abbreviation = crmAccountQuery.Name;
            }
            return branch;
        }


        public OrderAccount GetCustomerById(Guid id)
        {
            var crmAccountQuery = _crmContext.XrmServiceContext.AccountSet.Where(x => x.Id == id).FirstOrDefault();

            var customer = new OrderAccount();

            if (crmAccountQuery != null)
            {
                customer.AccountId = crmAccountQuery.Id;
                customer.AccountName = crmAccountQuery.Name;
            }
            return customer;
        }
    }
}