using System;
using System.Collections.Generic;

namespace ArmadaPortal.Core.Models
{
    public class BranchAccount
    {
        public Guid? BranchAccountId { get; set; }
        public string Abbreviation { get; set; }
        public string BranchName { get; set; }
    }
}
