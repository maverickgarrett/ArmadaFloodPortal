namespace ArmadaPortal.Flood {
    export interface DocumentRetrieveRequest extends Serenity.RetrieveRequest {
        AccountId?: string;
        OrderId?: string;
        DocumentId?: string;
    }
}

