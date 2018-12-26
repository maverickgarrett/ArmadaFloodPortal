
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class RolesGrid extends Serenity.EntityGrid<RolesRow, any> {
        protected getColumnsKey() { return 'Default.Roles'; }
        protected getDialogType() { return RolesDialog; }
        protected getIdProperty() { return RolesRow.idProperty; }
        protected getLocalTextPrefix() { return RolesRow.localTextPrefix; }
        protected getService() { return RolesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}