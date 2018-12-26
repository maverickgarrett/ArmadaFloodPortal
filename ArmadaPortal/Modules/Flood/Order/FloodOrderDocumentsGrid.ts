/// <reference path="../Document/DocumentGrid.ts" />

namespace ArmadaPortal.Flood {

    import fld = DocumentRow.Fields;

    @Serenity.Decorators.registerClass()
    export class FloodOrderDocumentsGrid extends DocumentGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            //return super.getColumns().filter(x => x.field !== fld.CustomerCompanyName);
            return super.getColumns();
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected addButtonClick() {
            this.editItem({ orderId: this.orderId });
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
                this.setEquality('orderId', value);
                this.refresh();
            }
        }
    }
}