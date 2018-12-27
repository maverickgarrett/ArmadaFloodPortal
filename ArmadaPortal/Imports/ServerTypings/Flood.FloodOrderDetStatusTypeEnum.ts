namespace ArmadaPortal.Flood {
    export enum FloodOrderDetStatusTypeEnum {
        AllOrders = 0,
        Ordered = 100000000,
        Assigned = 100000001,
        Review = 100000002,
        Completed = 100000003,
        OnHold = 100000004,
        Issue = 100000005,
        Draft = 100000006
    }
    Serenity.Decorators.registerEnumType(FloodOrderDetStatusTypeEnum, 'ArmadaPortal.Flood.FloodOrderDetStatusTypeEnum', 'Flood.FloodOrderDetStatusTypeEnum');
}

