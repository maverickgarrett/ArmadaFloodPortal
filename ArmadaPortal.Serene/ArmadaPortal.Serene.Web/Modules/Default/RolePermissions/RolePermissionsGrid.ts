
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class RolePermissionsGrid extends Serenity.EntityGrid<RolePermissionsRow, any> {
        protected getColumnsKey() { return 'Default.RolePermissions'; }
        protected getDialogType() { return RolePermissionsDialog; }
        protected getIdProperty() { return RolePermissionsRow.idProperty; }
        protected getLocalTextPrefix() { return RolePermissionsRow.localTextPrefix; }
        protected getService() { return RolePermissionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}