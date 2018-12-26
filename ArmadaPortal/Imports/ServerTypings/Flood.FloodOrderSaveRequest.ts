namespace ArmadaPortal.Flood {
    export interface FloodOrderSaveRequest extends Serenity.ServiceRequest {
        IsUrgent?: boolean;
        UploadDocumentFileName?: string;
        EmailCertTo?: string;
        EmailCertCC?: string;
        OrderType?: number;
        LoanType?: number;
        Borrower?: string;
        LoanNumber?: string;
        Address1Orig?: string;
        Address2Orig?: string;
        CityOrig?: string;
        StateOrig?: string;
        ZipOrig?: string;
        ParcelNumber?: string;
        NoteToAnalyst?: string;
        UploadDocument?: string;
    }
}

