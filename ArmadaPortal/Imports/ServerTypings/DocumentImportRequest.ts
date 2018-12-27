namespace ArmadaPortal {
    export interface DocumentImportRequest extends Serenity.ServiceRequest {
        OrderId?: string;
        UploadDocument?: string;
    }
}

