namespace ArmadaPortal.Flood {
    export interface FloodOrderForm {
        OrderAccountId: Serenity.StringEditor;
        BranchId: Serenity.StringEditor;
        OrderNumber: Serenity.StringEditor;
        IsUrgent: Serenity.BooleanEditor;
        OrderCreatedByName: Serenity.StringEditor;
        EmailCertCC: Serenity.StringEditor;
        OrderType: Serenity.EnumEditor;
        LoanType: Serenity.EnumEditor;
        Borrower: Serenity.StringEditor;
        LoanNumber: Serenity.StringEditor;
        Address1Orig: Serenity.StringEditor;
        Address2Orig: Serenity.StringEditor;
        CityOrig: Serenity.StringEditor;
        StateOrig: Serenity.StringEditor;
        ZipOrig: Serenity.StringEditor;
        ParcelNumber: Serenity.StringEditor;
        NoteToAnalyst: Serenity.StringEditor;
        OrderId: Serenity.StringEditor;
        UploadDocument: Serenity.MultipleImageUploadEditor;
    }

    export class FloodOrderForm extends Serenity.PrefixedContext {
        static formKey = 'ArmadaPortal.FloodOrder';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FloodOrderForm.init)  {
                FloodOrderForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;
                var w2 = s.EnumEditor;
                var w3 = s.MultipleImageUploadEditor;

                Q.initFormType(FloodOrderForm, [
                    'OrderAccountId', w0,
                    'BranchId', w0,
                    'OrderNumber', w0,
                    'IsUrgent', w1,
                    'OrderCreatedByName', w0,
                    'EmailCertCC', w0,
                    'OrderType', w2,
                    'LoanType', w2,
                    'Borrower', w0,
                    'LoanNumber', w0,
                    'Address1Orig', w0,
                    'Address2Orig', w0,
                    'CityOrig', w0,
                    'StateOrig', w0,
                    'ZipOrig', w0,
                    'ParcelNumber', w0,
                    'NoteToAnalyst', w0,
                    'OrderId', w0,
                    'UploadDocument', w3
                ]);
            }
        }
    }
}

