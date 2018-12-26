
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class VersionInfoGrid extends Serenity.EntityGrid<VersionInfoRow, any> {
        protected getColumnsKey() { return 'Default.VersionInfo'; }
        protected getDialogType() { return VersionInfoDialog; }
        protected getIdProperty() { return VersionInfoRow.idProperty; }
        protected getLocalTextPrefix() { return VersionInfoRow.localTextPrefix; }
        protected getService() { return VersionInfoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}