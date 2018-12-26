
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class UsersDialog extends Serenity.EntityDialog<UsersRow, any> {
        protected getFormKey() { return UsersForm.formKey; }
        protected getIdProperty() { return UsersRow.idProperty; }
        protected getLocalTextPrefix() { return UsersRow.localTextPrefix; }
        protected getNameProperty() { return UsersRow.nameProperty; }
        protected getService() { return UsersService.baseUrl; }

        protected form = new UsersForm(this.idPrefix);

    }
}