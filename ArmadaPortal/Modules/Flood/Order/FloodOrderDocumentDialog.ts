/// <reference path="../Document/DocumentImportDialog.ts" />

namespace ArmadaPortal.Flood {

    @Serenity.Decorators.registerClass()
    export class FloodOrderDocumentDialog extends DocumentImportDialog {

        constructor() {
            super();
        }

        updateInterface() {
            //super.updateInterface();

            //Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
        }
    }
}