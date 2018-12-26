namespace ArmadaPortal.Flood {
    export interface DocumentImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class DocumentImportForm extends Serenity.PrefixedContext {
        static formKey = 'Flood.DocumentImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentImportForm.init)  {
                DocumentImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(DocumentImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

