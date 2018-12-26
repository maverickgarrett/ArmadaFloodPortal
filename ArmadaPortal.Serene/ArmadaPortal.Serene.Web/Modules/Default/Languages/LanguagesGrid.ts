
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class LanguagesGrid extends Serenity.EntityGrid<LanguagesRow, any> {
        protected getColumnsKey() { return 'Default.Languages'; }
        protected getDialogType() { return LanguagesDialog; }
        protected getIdProperty() { return LanguagesRow.idProperty; }
        protected getLocalTextPrefix() { return LanguagesRow.localTextPrefix; }
        protected getService() { return LanguagesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}