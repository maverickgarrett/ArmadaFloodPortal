namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Core;
    using ArmadaPortal.Core.Models;
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Flood.FloodOrderDetStatusTypeEnum")]
    public enum FloodOrderDetStatusTypeEnum
    {
        [Description("All Orders")]
        AllOrders = 0,
        [Description("Draft")]
        Draft = FloodDeterminationStatus.Draft,
        [Description("Ordered")]
        Ordered = FloodDeterminationStatus.Ordered,
        [Description("Assigned")]
        Assigned = FloodDeterminationStatus.Assigned,
        [Description("Completed")]
        Completed = FloodDeterminationStatus.Completed,
        [Description("Issue")]
        Issue = FloodDeterminationStatus.Issue,
        [Description("OnHold")]
        OnHold = FloodDeterminationStatus.OnHold,
        [Description("Review")]
        Review = FloodDeterminationStatus.Review,
    }

}

