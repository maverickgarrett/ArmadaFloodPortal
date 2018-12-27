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

        protected getToolbarButtons(): Serenity.ToolButton[] {
            let buttons = super.getToolbarButtons();

            // *** Remove default buttons ***
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            var saveButton = {
                title: Q.text("Submit Order"),
                cssClass: 'save-and-close-button',
                onClick: () => {

                    if (!this.validateForm()) {
                        return;
                    }

                    Q.defaultNotifyOptions.positionClass = "toast-top-center";
                    Q.defaultNotifyOptions.newestOnTop = false;
                    Q.notifyWarning(Q.text("Order is being submitted"), Q.text("Flood Order"));

                    var saveEntity = this.getSaveEntity();
                    // *** Here we actually call the endpoint ***
                    var servicecall = DocumentService.CreateDocument(
                        {
                            OrderId: saveEntity.OrderId,
                            UploadDocument: 
                            UploadDocument: saveEntity.UploadDocument
                        }, response => { // *** Everything was ok on the endpoint, show it with a toast ***
                            let options: ToastrOptions = Q.defaultNotifyOptions;
                            options.tapToDismiss = true;

                            this.dialogClose();

                            var message = JSON.parse(servicecall.responseText);
                            Q.notifySuccess(message, Q.text("Flood Order"), options);
                        },
                        {
                            blockUI: true,
                            onError: response => { // *** There was an error (exception) on the endpoint's side, show it with a toast ***
                                let options: ToastrOptions = Q.defaultNotifyOptions;
                                options.timeOut = 15000;
                                options.extendedTimeOut = 3000;

                                this.dialogClose();
                                Q.notifyError(Q.text("Flood Order Error"), Q.text("Flood Order Save Error"), options);
                                var errorcontent = JSON.parse(servicecall.responseText);

                                var message = errorcontent["Error"]["Message"]

                                Q.alert(message);

                            },
                            //onCleanup: () => this.serviceCallCleanup()
                        });
                }

            };

            var cancelButton = {
                title: Q.text("Cancel"),
                cssClass: 'cancel-button',
                onClick: () => {
                    this.dialogClose();

                }

            };

            var letterButton = {
                title: Q.text("Determination Letter Download"),
                cssClass: 'export-pdf-button',
                onClick: () => {
                    Q.postToUrl({
                        url: '~/FloodReport/GetFloodOrderDeterminationLetter/?orderId=' + this.get_entityId(),
                        params: {
                        },
                        target: '_blank'
                    });
                }
            };


            buttons.push(saveButton);
            buttons.push(cancelButton);
            buttons.push(letterButton);

            return buttons;
        }


        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Insert Document',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.UploadDocument.value == null ||
                            Q.isEmptyOrNull(this.form.UploadDocument)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        DocumentService.DocumentImport({
                            OrderId: this.form.OrderId.value,
                            UploadFileName: this.form.UploadDocument,
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