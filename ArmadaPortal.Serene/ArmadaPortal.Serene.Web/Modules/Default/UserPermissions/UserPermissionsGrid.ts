
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class UserPermissionsGrid extends Serenity.EntityGrid<UserPermissionsRow, any> {
        protected getColumnsKey() { return 'Default.UserPermissions'; }
        protected getDialogType() { return UserPermissionsDialog; }
        protected getIdProperty() { return UserPermissionsRow.idProperty; }
        protected getLocalTextPrefix() { return UserPermissionsRow.localTextPrefix; }
        protected getService() { return UserPermissionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}