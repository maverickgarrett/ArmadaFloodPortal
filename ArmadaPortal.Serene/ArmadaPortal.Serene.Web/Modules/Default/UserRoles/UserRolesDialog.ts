
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class UserRolesDialog extends Serenity.EntityDialog<UserRolesRow, any> {
        protected getFormKey() { return UserRolesForm.formKey; }
        protected getIdProperty() { return UserRolesRow.idProperty; }
        protected getLocalTextPrefix() { return UserRolesRow.localTextPrefix; }
        protected getService() { return UserRolesService.baseUrl; }

        protected form = new UserRolesForm(this.idPrefix);

    }
}