/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace ArmadaPortal.Flood {

    @Serenity.Decorators.registerClass()
    export class DocumentDialog extends Serenity.EntityDialog<Flood.DocumentRow, any> {
        protected getFormKey() { return DocumentImportForm.formKey; }
        protected getIdProperty() { return DocumentRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentRow.localTextPrefix; }
        protected getNameProperty() { return DocumentRow.nameProperty; }
        protected getService() { return DocumentService.baseUrl; }


        protected form = new DocumentImportForm(this.idPrefix);

        private loadedState: string;

        constructor() {
            super();

            this.form = new DocumentImportForm(this.idPrefix);
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: DocumentRow) {
            super.loadEntity(entity);
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            //Q.reloadLookup('Northwind.Customer');
        }

    }
}