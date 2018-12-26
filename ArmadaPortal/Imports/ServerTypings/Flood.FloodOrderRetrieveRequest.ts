namespace ArmadaPortal.Flood {
    export interface FloodOrderRetrieveRequest extends Serenity.RetrieveRequest {
        OrderId?: string;
        UploadDocumentFileName?: string;
    }
}

