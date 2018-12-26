namespace ArmadaPortal.Flood {

    @Serenity.Decorators.registerClass()
    export class DocumentImportDialog extends Serenity.EntityDialog<DocumentRow, any> {
        protected getFormKey() { return DocumentImportForm.formKey; }
        protected getIdProperty() { return DocumentRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentRow.localTextPrefix; }
        protected getNameProperty() { return DocumentRow.nameProperty; }
        protected getService() { return DocumentService.baseUrl; }
        private form = new DocumentImportForm(this.idPrefix);

        private loadedState: string;

        constructor() {
            super();

            this.form = new DocumentImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Add a Document";
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Insert Document',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        DocumentService.DocumentImport({
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                            Q.notifyInfo(
                                'Inserted: ' + (response.Inserted || 0) +
                                ', Updated: ' + (response.Updated || 0));

                            if (response.ErrorList != null && response.ErrorList.length > 0) {
                                Q.notifyError(response.ErrorList.join(',\r\n '));
                            }

                            this.dialogClose();
                        });
                    },
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
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
        }

    }
}