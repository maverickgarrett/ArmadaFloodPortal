
namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Core;
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Flood.FloodOrderTypeEnum")]
    public enum FloodOrderTypeEnum
    {
        [Description("Basic")]
        Basic = OrderType.Basic,
        [Description("Life Of Loan")]
        LifeOfLoan = OrderType.LifeOfLoan
    }

}