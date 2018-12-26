
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class UserPreferencesDialog extends Serenity.EntityDialog<UserPreferencesRow, any> {
        protected getFormKey() { return UserPreferencesForm.formKey; }
        protected getIdProperty() { return UserPreferencesRow.idProperty; }
        protected getLocalTextPrefix() { return UserPreferencesRow.localTextPrefix; }
        protected getNameProperty() { return UserPreferencesRow.nameProperty; }
        protected getService() { return UserPreferencesService.baseUrl; }

        protected form = new UserPreferencesForm(this.idPrefix);

    }
}