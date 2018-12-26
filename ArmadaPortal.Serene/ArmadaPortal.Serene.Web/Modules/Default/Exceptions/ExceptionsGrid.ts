
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class ExceptionsGrid extends Serenity.EntityGrid<ExceptionsRow, any> {
        protected getColumnsKey() { return 'Default.Exceptions'; }
        protected getDialogType() { return ExceptionsDialog; }
        protected getIdProperty() { return ExceptionsRow.idProperty; }
        protected getLocalTextPrefix() { return ExceptionsRow.localTextPrefix; }
        protected getService() { return ExceptionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}