using System;
using System.Collections.Generic;
using ArmadaPortal.Core.Models;

namespace ArmadaPortal.Core.Repositories
{
    public interface IAccountRepository
    {
        OrderAccount GetCustomerById(Guid id);
        IList<BranchAccount> GetBranchesForCompany(Guid parentAccountId);
        BranchAccount GetBranchByBranchId(Guid branchId);
    }
}