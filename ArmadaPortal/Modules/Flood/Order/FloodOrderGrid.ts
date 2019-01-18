namespace ArmadaPortal.Flood {

    import fld = FloodOrderRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    @Serenity.Decorators.responsive()

    export class FloodOrderGrid extends Serenity.EntityGrid<FloodOrderRow, any> {

        protected getColumnsKey() { return "ArmadaPortal.FloodOrder"; }
        protected getDialogType() { return <any>FloodOrderDialog; }
        protected getIdProperty() { return "OrderId"; }
        protected getNameProperty() { return FloodOrderRow.nameProperty; }
        protected getLocalTextPrefix() { return FloodOrderRow.localTextPrefix; }
        protected getService() { return FloodOrderService.baseUrl; }

        protected orderStatusFilter: Serenity.EnumEditor;


        constructor(container: JQuery) {
            super(container);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected createQuickFilters() {
            super.createQuickFilters();

            this.orderStatusFilter = this.findQuickFilter(Serenity.EnumEditor, fld.FloodOrderStatus);
            //var gridFilterDisplayBar = this.element.find('.s-FilterDisplayBar');
        }


        protected getButtons() {
            var buttons = super.getButtons();

            //Remove Default Add Button
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            buttons.push({
                title: 'Add New Order', cssClass: 'add-button',
                onClick: () => {
                    // we could use EditItem here too, but for demonstration
                    // purposes we are manually creating dialog this time
                    var dlg = new Flood.FloodOrderDialog();

                    // let grid watch for changes to manually created dialog, 
                    // so when a new item is saved, grid can refresh itself
                    this.initDialog(dlg);

                    dlg.element.bind('dialogclose', () => {
                        // *** This is triggered after closing dialog ***
                        this.refresh();
                    });


                    dlg.loadEntityAndOpenDialog(<Flood.FloodOrderRow>{
                          OrderAccountId: 'cfd96059-adbb-e811-a965-000d3a32c8b8',
                          OrderAccountName: 'Alley Bank',
                          OrderCreatedByName: 'Ally Master',
                          BranchId: '21ad0673-adbb-e811-a965-000d3a32c8b8',
                          OrderDate: Q.formatDate(new Date(), 'MM-dd-yyyy')
                    });
                }
            });

            return buttons;
        }

        protected getColumns() {
            let columns = super.getColumns();

            return columns;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            //grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            return grid;
        }


        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            //opt.showFooterRow = false;
            //opt.rowHeight = 250;
            return opt;
        }

        protected usePager() {
            return true;
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }

            let request = this.view.params as FloodOrderListRequest;

            return true;
        }

        public set_orderstatusfilter(value: number): void {
            this.orderStatusFilter.value = value == null ? '' : value.toString();
        }

        public hidefilterbar(): void {

            this.element.find('.s-FilterDisplayBar').hide();
        }


        private _accountId: string;

        get accountId() {
            return this._accountId;
        }

        private _branchId: string;

        get branchId() {
            return this._branchId;
        }

        set branchId(value: string) {
            if (this._branchId !== value) {
                this._branchId = value;
                this.setEquality('BranchId', value);
                this.refresh();
            }
        }






    }
}