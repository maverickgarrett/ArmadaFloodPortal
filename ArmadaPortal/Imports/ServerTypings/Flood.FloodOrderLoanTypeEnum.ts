namespace ArmadaPortal.Flood {
    export enum FloodOrderLoanTypeEnum {
        Residential = 100000000,
        Commercial = 100000001,
        Land = 100000002,
        NewConstruct = 100000003
    }
    Serenity.Decorators.registerEnumType(FloodOrderLoanTypeEnum, 'ArmadaPortal.Flood.FloodOrderLoanTypeEnum', 'Flood.FloodOrderLoanTypeEnum');
}

