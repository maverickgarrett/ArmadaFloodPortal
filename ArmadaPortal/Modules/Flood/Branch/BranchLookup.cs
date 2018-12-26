namespace ArmadaPortal.Flood.Lookups
{
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    

    [LookupScript]
    public class BranchLookup : RowLookupScript<Entities.BranchRow>
    {
        private IAccountRepository _accountRepository;
        private Guid _accountId;

        public BranchLookup()
        {
            IdField = Entities.BranchRow.Fields.BranchId.PropertyName;
            TextField = Entities.BranchRow.Fields.BranchName.PropertyName;
            _accountRepository = new AccountRepository();
            _accountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
        }
        protected override void PrepareQuery(SqlQuery query)
        {
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
        protected override List<Entities.BranchRow> GetItems()
        {
            List<Entities.BranchRow> list = new List<Entities.BranchRow>();

            var baseCrmBranches = _accountRepository.GetBranchesForCompany(_accountId);

            foreach (var branch in baseCrmBranches)
            {
                if (branch.BranchAccountId != null)
                    list.Add(new Entities.BranchRow
                    {
                        BranchId = branch.BranchAccountId.Value.ToString(),
                        BranchAbbrev = branch.Abbreviation,
                        BranchName = branch.BranchName
                    });
            }

            return list;

        }

    }
}
