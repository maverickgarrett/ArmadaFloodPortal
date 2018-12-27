/// <reference path="../Document/DocumentGrid.ts" />

namespace ArmadaPortal.Flood {

    import fld = DocumentRow.Fields;

    @Serenity.Decorators.registerClass()
    export class FloodOrderDocumentsGrid extends DocumentGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns();
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected getButtons() {
            //buttons.push(Common.PdfExportHelper.createToolButton({
            //    grid: this,
            //    onViewSubmit: () => this.onViewSubmit()
            //}));

            var buttons = super.getButtons();

            // *** Remove default buttons ***
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "save-and-close-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "delete-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "localization-button"), 1);
            //buttons.splice(Q.indexOf(buttons, x => x.cssClass == "clone-button"), 1);

            buttons.push({
                title: 'Upload Document', cssClass: 'add-button',
                onClick: () => {
                    // we could use EditItem here too, but for demonstration
                    // purposes we are manually creating dialog this time
                    var dialog = new Flood.DocumentImportDialog();
                    // let grid watch for changes to manually created dialog, 
                    // so when a new item is saved, grid can refresh itself


                    dialog.element.bind('dialogclose', () => {
                        // *** This is triggered after closing dialog ***
                        this.refresh();
                    });

                    dialog.loadEntityAndOpenDialog(<Flood.DocumentRow>{
                        OrderId: this.orderId
                    });
                }
            });


            return buttons;
        }


        protected addButtonClick() {
            this.editItem({ OrderId: this.orderId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.orderId;
        }

        private _orderId: string;

        get orderId() {
            return this._orderId;
        }

        set orderId(value: string) {
            if (this._orderId !== value) {
                this._orderId = value;
                this.setEquality('OrderId', value);
                this.refresh();
            }
        }
    }
}