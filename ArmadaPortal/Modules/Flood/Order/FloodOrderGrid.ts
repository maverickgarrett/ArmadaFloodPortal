namespace ArmadaPortal.Flood {

    import fld = FloodOrderRow.Fields;

    @Serenity.Decorators.registerClass()
    //@Serenity.Decorators.filterable()

    export class FloodOrderGrid extends Serenity.EntityGrid<FloodOrderRow, any> {

        protected getColumnsKey() { return "ArmadaPortal.FloodOrder"; }
        protected getDialogType() { return <any>FloodOrderDialog; }
        protected getIdProperty() { return "OrderId"; }
        protected getNameProperty() { return FloodOrderRow.nameProperty; }
        protected getLocalTextPrefix() { return FloodOrderRow.localTextPrefix; }
        protected getService() { return FloodOrderService.baseUrl; }

        //protected floodOrderStatusFilter: Serenity.EnumEditor;


        constructor(container: JQuery) {
            super(container);
        }

        //protected getQuickFilters() {
        //    var filters = super.getQuickFilters();

            //// we create a date-range quick filter, which is a composite
            //// filter with two date time editors
            //var orderDate = this.dateRangeQuickFilter('OrderDate', 'Order Date');
            //orderDate.handler = args => {

            //    var start = args.widget.value;

            //    // to find end date editor, need to search it by its css class among siblings
            //    var end = args.widget.element.nextAll('.s-DateEditor')
            //            .getWidget(Serenity.DateEditor).value;

            //    (args.request as FloodOrderListRequest).StartDate = start;
            //    (args.request as FloodOrderListRequest).EndDate = end;

            //   // active option controls when a filter editor looks active, e.g. its label is blueish
            //    args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
            //};

            //filters.push(orderDate);

            //filters.push({
            //    type: Serenity.LookupEditor,
            //    options: {
            //        lookupKey: BranchRow.lookupKey
            //    },
            //    field: 'BranchId',
            //    title: 'Only Orders for Branch',
            //    handler: w => {
            //        (this.view.params as FloodOrderListRequest).BranchId = (w.value);
            //    },
            //    cssClass: 'hidden-xs'
            //});


            //var q = Q.parseQueryString();

            //if (q["floodOrderStatus"]) {
            //    (this.view.params as FloodOrderListRequest).OrderStatusGrouping = (q["floodOrderStatus"]);
            //    //var floodOrderStatusGrouping = Q.tryFirst(filters, x => x.field === "FloodOrderStatusDescription");
            //    //floodOrderStatusGrouping.init = e => {
            //    //    e.element.getWidget(Serenity.EnumEditor).value = q["floodOrderStatus"];
            //    //};
            //}
        //    return filters;
        //}


        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        //protected addButtonClick() {
        //    this.editItem({ OrderId: this.orderId });
        //}

        protected addButtonClick() {
            this.editItem(<FloodOrderRow>{
                OrderAccountId: 'cfd96059-adbb-e811-a965-000d3a32c8b8',
                OrderAccountName: 'Alley Bank',
                BranchId: '21ad0673-adbb-e811-a965-000d3a32c8b8',
                OrderDate: Q.formatDate(new Date(), 'MM-dd-yyyy')
            });
        }


        protected getButtons() {
            var buttons = super.getButtons();

            //buttons.push(Common.PdfExportHelper.createToolButton({
            //    grid: this,
            //    onViewSubmit: () => this.onViewSubmit()
            //}));

            return buttons;
        }

        protected getColumns() {
            let columns = super.getColumns();

            //var completedOrderDescription = 'Completed';

            //columns.splice(1, 0, {
            //    field: 'View Details',
            //    name: '',
            //    format: ctx => '<a class="inline-action view-details" title="view details"></a>',
            //    width: 24,
            //    minWidth: 24,
            //    maxWidth: 24
            //});

            //columns.splice(2,
            //    0,
            //    {
            //        field: 'Flood Certificate',
            //        name: '',
            //        format: ctx =>
            //            '<a class="inline-action print-flood fa fa-file-pdf-o text-red" title="flood certificate"></a>',
            //        width: 24,
            //        minWidth: 24,
            //        maxWidth: 24
            //    });


            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-flood')) {
                    Q.postToUrl({
                        url: '~/FloodReport/Retrieve/?orderId=' + item.OrderId,
                        params: {
                        },
                        target: '_blank'
                    });
                } else if (target.hasClass('view-details')) {
                    this.editItem(item.ID);
                }
            }
        }



        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            //grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            return grid;
        }


        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            //opt.rowHeight = 250;
            return opt;
        }

        protected usePager() {
            return true;
        }

        protected createQuickFilters() {
            super.createQuickFilters();

            //this.floodOrderStatusFilter = this.findQuickFilter(Serenity.EnumEditor, fld.FloodOrderStatus);
        }

        public set_floodOrderStatusFilter(value: number): void {
           // this.floodOrderStatusFilter.value = value == null ? '' : value.toString();
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