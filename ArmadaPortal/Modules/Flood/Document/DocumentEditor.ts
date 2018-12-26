/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ArmadaPortal.Flood {

    @Serenity.Decorators.registerClass()
    export class DocumentEditor extends Common.GridEditorBase<DocumentRow> {
        protected getColumnsKey() { return "ArmadaPortal.Document"; }
        protected getDialogType() { return DocumentImportDialog; }
        protected getLocalTextPrefix() { return DocumentRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            return true;
        }
    }
}