using ArmadaPortal.Core;

namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Core.Models;
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Flood.FloodOrderLoanTypeEnum")]
    public enum FloodOrderLoanTypeEnum
    {
        [Description("Residential")]
        Residential = (int)LoanType.Residential,
        [Description("Commercial")]
        Commercial = (int)LoanType.Commercial,
        [Description("Land / No Structures")]
        Land = (int)LoanType.LandNoStructures,
        [Description("New Construction")]
        NewConstruct = (int)LoanType.NewConstruction,
    }

}

