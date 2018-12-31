namespace ArmadaPortal.Flood {
    @Serenity.Decorators.registerClass()
    //@Serenity.Decorators.filterable()
    @Serenity.Decorators.panel()
    //@Serenity.Decorators.resizable()
    //@Serenity.Decorators.maximizable()
    export class FloodOrderDialog extends Serenity.EntityDialog<FloodOrderRow, any> {
        protected getFormKey() { return FloodOrderForm.formKey; }
        protected getIdProperty() { return FloodOrderRow.idProperty; }
        protected getLocalTextPrefix() { return FloodOrderRow.localTextPrefix; }
        protected getNameProperty() { return FloodOrderRow.nameProperty; }
        protected getService() { return FloodOrderService.baseUrl; }

        protected form = new FloodOrderForm(this.idPrefix);

        private documentsGrid: FloodOrderDocumentsGrid;
        private loadedState: string;

        constructor() {
            super();
            //this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            this.documentsGrid = new FloodOrderDocumentsGrid(this.byId('DocumentsGrid'));
            this.documentsGrid.openDialogsAsPanel = false; 

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }


        loadEntity(entity: FloodOrderRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Documents', this.isNewOrDeleted());
            this.documentsGrid.orderId = entity.OrderId;

            if (!this.entity.ShowDownloadLink) {

            }
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();
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
                var servicecall = FloodOrderService.Create(
                    {
                        IsUrgent: saveEntity.IsUrgent,
                        //EmailCertTo: saveEntity.EmailCertTo,
                        EmailCertCC: saveEntity.EmailCertCC,
                        OrderType: saveEntity.OrderType,
                        LoanType: saveEntity.LoanType,
                        Borrower: saveEntity.Borrower,
                        LoanNumber: saveEntity.LoanNumber,
                        Address1Orig: saveEntity.Address1Orig,
                        Address2Orig: saveEntity.Address2Orig,
                        CityOrig: saveEntity.CityOrig,
                        StateOrig: saveEntity.StateOrig,
                        ZipOrig: saveEntity.ZipOrig,
                        ParcelNumber: saveEntity.ParcelNumber,
                        NoteToAnalyst: saveEntity.NoteToAnalyst,
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

                    FloodOrderService.CheckIfDeterminationLetterExists({
                        OrderId: this.get_entityId()
                    }, response => {
                        if (response.IsValid == 1) {
                            Q.postToUrl({
                                url: '~/FloodReport/GetFloodOrderDeterminationLetter/?orderId=' + this.get_entityId(),
                                params: {
                                },
                                target: '_blank'
                            });
                        }
                        else {
                            Q.notifyError("The Flood Determination Document is not ready for this order yet.")
                        }
                    });
                },
            };


            buttons.push(saveButton);
            buttons.push(cancelButton);
            buttons.push(letterButton);

            return buttons;
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


        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            this.showSaveSuccessMessage(response);

            // check that this is an insert
            if (this.isNew()) {
                //Q.notifySuccess("Order Saved with ID: " + response.EntityId);

                // but let's better load inserted record using Retrieve service
                ArmadaPortal.Flood.FloodOrderService.Retrieve(<any>{
                    EntityId: response.EntityId
                }, resp => {
                    Q.notifyInfo("Order Number is: " + resp.Entity.OrderNumber);
                });
            }

            this.dialogClose();
        }


        protected updateInterface() {
            super.updateInterface();

            this.deleteButton.hide();
            this.applyChangesButton.hide();

            this.toolbar.findButton('cancel-button').toggle(this.isNew());
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());

            this.toolbar.findButton('export-pdf-button').toggleClass('disabled', !this.entity.ShowDownloadLink);



            if (this.isEditMode()) {
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                Serenity.EditorUtils.setReadonly(this.element.find('.emaildomain'), true);
                this.toolbar.findButton('cancel-button').hide();
                this.saveAndCloseButton.hide();

                // remove required asterisk (*)
                this.element.find('sup').hide();
                this.deleteButton.hide();
                this.form.UploadDocument.element.hide();
                this.element.find(".category-title:contains('Documents')").parent().hide(false);

                //Serenity.EditorUtils.setReadOnly(this.form.LoanNumber, false);
                //Serenity.EditorUtils.setReadOnly(this.form.Borrower, false);
                //Serenity.EditorUtils.setReadOnly(this.form.Borrower2, false);
                //Serenity.EditorUtils.setReadOnly(this.form.IsUrgent, false);
                //Serenity.EditorUtils.setReadOnly(this.form.EmailCertTo, false);
                //Serenity.EditorUtils.setReadOnly(this.form.EmailCertCC, false);
                //Serenity.EditorUtils.setReadOnly(this.form.NoteToAnalyst, false);

            }
        }

    }
}