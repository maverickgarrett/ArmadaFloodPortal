using System.Collections.Generic;
using System.Linq;
using ArmadaPortal.Data;
using ArmadaPortal.Core;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core.Repositories;


namespace ArmadaPortal.Data.Repositories
{
    public class OrderLookupRepository : IOrderLookupRepository
    {
        public IQueryable<LookupValue> GetAllLoanTypes()
        {
            return new List<LookupValue> {
                new LookupValue {
                    ValueId = (int)LoanType.Commercial,
                    Value = "Commercial"
                },
                new LookupValue {
                    ValueId = (int)LoanType.LandNoStructures,
                    Value = "Land No Structures"
                },
                new LookupValue {
                    ValueId = (int)LoanType.NewConstruction,
                    Value = "New Construction"
                },
                new LookupValue {
                    ValueId = (int)LoanType.Residential,
                    Value = "Residential"
                },
            }.AsQueryable();
        }

        public IQueryable<LookupValue> GetAllOrderTypes()
        {
            return new List<LookupValue> {
                new LookupValue {
                    ValueId = (int)OrderType.Basic,
                    Value = "Basic"
                },
                new LookupValue {
                    ValueId = (int)OrderType.LifeOfLoan,
                    Value = "Life of Loan"
                },
            }.AsQueryable();
        }
    }
}