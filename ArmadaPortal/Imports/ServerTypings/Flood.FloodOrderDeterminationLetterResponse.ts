namespace ArmadaPortal.Flood {
    export interface FloodOrderDeterminationLetterResponse extends Serenity.ServiceResponse {
        IsValid?: number;
        ErrorList?: string[];
    }
}

