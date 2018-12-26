namespace ArmadaPortal.AdministrationClient {

    @Serenity.Decorators.registerClass()
    export class ClientUserDialog extends Serenity.EntityDialog<ClientUserRow, any> {
        protected getFormKey() { return ClientUserForm.formKey; }
        protected getIdProperty() { return ClientUserRow.idProperty; }
        protected getIsActiveProperty() { return ClientUserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return ClientUserRow.localTextPrefix; }
        protected getNameProperty() { return ClientUserRow.nameProperty; }
        protected getService() { return ClientUserService.baseUrl; }

        protected form = new ClientUserForm(this.idPrefix);

        constructor() {
            super();

            this.form.Password.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value.length < 7)
                    return "Password must be at least 7 characters!";
            });

            this.form.PasswordConfirm.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value != this.form.PasswordConfirm.value)
                    return "The passwords entered doesn't match!";
            });
        }

        protected getToolbarButtons()
        {
            let buttons = super.getToolbarButtons();

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            //this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
            //this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // these fields are only required in new record mode
            this.form.Password.element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
            this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
        }
    }
}