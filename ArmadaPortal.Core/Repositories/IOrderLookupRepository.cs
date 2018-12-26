using System.Collections.Generic;
using ArmadaPortal.Core.Models;
using System.Linq;

namespace ArmadaPortal.Core.Repositories
{
    public interface IOrderLookupRepository
    {
        IQueryable<LookupValue> GetAllOrderTypes();
        IQueryable<LookupValue> GetAllLoanTypes();
    }
}