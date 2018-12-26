
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class RolePermissionsDialog extends Serenity.EntityDialog<RolePermissionsRow, any> {
        protected getFormKey() { return RolePermissionsForm.formKey; }
        protected getIdProperty() { return RolePermissionsRow.idProperty; }
        protected getLocalTextPrefix() { return RolePermissionsRow.localTextPrefix; }
        protected getNameProperty() { return RolePermissionsRow.nameProperty; }
        protected getService() { return RolePermissionsService.baseUrl; }

        protected form = new RolePermissionsForm(this.idPrefix);

    }
}