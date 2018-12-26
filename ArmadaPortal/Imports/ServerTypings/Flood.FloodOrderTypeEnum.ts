namespace ArmadaPortal.Flood {
    export enum FloodOrderTypeEnum {
        LifeOfLoan = 100000000,
        Basic = 100000001
    }
    Serenity.Decorators.registerEnumType(FloodOrderTypeEnum, 'ArmadaPortal.Flood.FloodOrderTypeEnum', 'Flood.FloodOrderTypeEnum');
}

