namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Core;
    using ArmadaPortal.Core.Models;
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Flood.FloodOrderDetStatusTypeEnum")]
    public enum FloodOrderDetStatusTypeEnum
    {
        [Description("Assigned")]
        Assigned = FloodDeterminationStatus.Assigned,
        [Description("Completed")]
        Completed = FloodDeterminationStatus.Completed,
        [Description("Assigned")]
        Draft = FloodDeterminationStatus.Draft,
        [Description("Assigned")]
        Issue = FloodDeterminationStatus.Issue,
        [Description("OnHold")]
        OnHold = FloodDeterminationStatus.OnHold,
        [Description("Ordered")]
        Ordered = FloodDeterminationStatus.Ordered,
        [Description("Review")]
        Review = FloodDeterminationStatus.Review,
    }

}

