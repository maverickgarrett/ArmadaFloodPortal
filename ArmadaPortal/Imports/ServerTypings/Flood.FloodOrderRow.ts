namespace ArmadaPortal.Flood {
    export interface FloodOrderRow {
        OrderId?: string;
        OrderDate?: string;
        IsUrgent?: boolean;
        LoanType?: FloodOrderLoanTypeEnum;
        OrderType?: FloodOrderTypeEnum;
        OrderAccountId?: string;
        OrderAccountName?: string;
        BranchId?: string;
        BranchName?: string;
        BranchAbbrev?: string;
        OrderCreatedById?: string;
        OrderCreatedByName?: string;
        OrderContactId?: string;
        OrderContactName?: string;
        OrderNumber?: string;
        EmailCertTo?: string;
        EmailCertCC?: string;
        Address1Orig?: string;
        Address2Orig?: string;
        CityOrig?: string;
        StateOrig?: string;
        ZipOrig?: string;
        AddressEnteredFormatted?: string;
        Address1Matched?: string;
        Address2Matched?: string;
        CityMatched?: string;
        StateMatched?: string;
        ZipMatched?: string;
        AddressMatchedFormatted?: string;
        FloodOrderStatus?: FloodOrderDetStatusTypeEnum;
        FloodOrderStatusDescription?: string;
        FloodOrderStatusDate?: string;
        LoanNumber?: string;
        NoteToAnalyst?: string;
        Borrower?: string;
        Borrower2?: string;
        FloodZone?: string;
        ParcelNumber?: string;
        UploadDocument?: string;
        UploadDocumentFileName?: string;
        ApprovalLetter?: number[];
        InsertDate?: string;
        ModifiedDate?: string;
    }

    export namespace FloodOrderRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'OrderNumber';
        export const localTextPrefix = 'Flood.FloodOrder';
        export const lookupKey = 'Flood.FloodOrder';

        export function getLookup(): Q.Lookup<FloodOrderRow> {
            return Q.getLookup<FloodOrderRow>('Flood.FloodOrder');
        }

        export declare const enum Fields {
            OrderId = "OrderId",
            OrderDate = "OrderDate",
            IsUrgent = "IsUrgent",
            LoanType = "LoanType",
            OrderType = "OrderType",
            OrderAccountId = "OrderAccountId",
            OrderAccountName = "OrderAccountName",
            BranchId = "BranchId",
            BranchName = "BranchName",
            BranchAbbrev = "BranchAbbrev",
            OrderCreatedById = "OrderCreatedById",
            OrderCreatedByName = "OrderCreatedByName",
            OrderContactId = "OrderContactId",
            OrderContactName = "OrderContactName",
            OrderNumber = "OrderNumber",
            EmailCertTo = "EmailCertTo",
            EmailCertCC = "EmailCertCC",
            Address1Orig = "Address1Orig",
            Address2Orig = "Address2Orig",
            CityOrig = "CityOrig",
            StateOrig = "StateOrig",
            ZipOrig = "ZipOrig",
            AddressEnteredFormatted = "AddressEnteredFormatted",
            Address1Matched = "Address1Matched",
            Address2Matched = "Address2Matched",
            CityMatched = "CityMatched",
            StateMatched = "StateMatched",
            ZipMatched = "ZipMatched",
            AddressMatchedFormatted = "AddressMatchedFormatted",
            FloodOrderStatus = "FloodOrderStatus",
            FloodOrderStatusDescription = "FloodOrderStatusDescription",
            FloodOrderStatusDate = "FloodOrderStatusDate",
            LoanNumber = "LoanNumber",
            NoteToAnalyst = "NoteToAnalyst",
            Borrower = "Borrower",
            Borrower2 = "Borrower2",
            FloodZone = "FloodZone",
            ParcelNumber = "ParcelNumber",
            UploadDocument = "UploadDocument",
            UploadDocumentFileName = "UploadDocumentFileName",
            ApprovalLetter = "ApprovalLetter",
            InsertDate = "InsertDate",
            ModifiedDate = "ModifiedDate"
        }
    }
}

