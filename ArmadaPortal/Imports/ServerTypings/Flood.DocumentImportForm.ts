namespace ArmadaPortal.Flood {
    export interface DocumentImportForm {
        OrderId: Serenity.StringEditor;
        UploadDocument: Serenity.MultipleImageUploadEditor;
    }

    export class DocumentImportForm extends Serenity.PrefixedContext {
        static formKey = 'Flood.DocumentImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentImportForm.init)  {
                DocumentImportForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.MultipleImageUploadEditor;

                Q.initFormType(DocumentImportForm, [
                    'OrderId', w0,
                    'UploadDocument', w1
                ]);
            }
        }
    }
}

