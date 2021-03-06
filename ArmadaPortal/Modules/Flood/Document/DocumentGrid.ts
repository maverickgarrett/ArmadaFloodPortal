﻿namespace ArmadaPortal.Flood {

    import fld = DocumentRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()

    export class DocumentGrid extends Serenity.EntityGrid<Flood.DocumentRow, any> {

        protected getColumnsKey() { return "ArmadaPortal.Document"; }
        protected getDialogType() { return <any>DocumentImportDialog; }
        protected getIdProperty() { return DocumentRow.idProperty; }
        protected getNameProperty() { return DocumentRow.nameProperty; }
        protected getLocalTextPrefix() { return DocumentRow.localTextPrefix; }
        protected getService() { return DocumentService.baseUrl; }



        constructor(container: JQuery) {
            super(container);
        }

        /**
         * This method is called to preprocess data returned from the list service
         */
        protected onViewProcessData(response: Serenity.ListResponse<Flood.DocumentRow>) {
            response = super.onViewProcessData(response);
            return response;
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();
            return filters;
        }
        protected createQuickFilters() {
            super.createQuickFilters();

            //this.orderStatusFilter = this.findQuickFilter(Serenity.EnumEditor, fld.FloodOrderStatus);
        }


        protected createQuickSearchInput() { };

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Document',
                name: '',
                format: ctx => '<a class="document-link inline-action" title="printdocument">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            Q.first(columns, x => x.field == fld.DocumentName).format =
                ctx => `<a href="javascript:;" class="document-link">${Q.htmlEncode(ctx.value)}</a>`;

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

            if (target.hasClass("document-link")) {
                e.preventDefault();

                Q.postToUrl({
                    url: '~/FloodReport/GetDocumentById/?documentId=' + item.DocumentId,
                    params: {
                    },
                    target: '_blank'
                });
            }

        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = false;
            return opt;
        }

        protected usePager() {
            return false;
        }
    }
}