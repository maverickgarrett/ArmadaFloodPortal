
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class UserPreferencesGrid extends Serenity.EntityGrid<UserPreferencesRow, any> {
        protected getColumnsKey() { return 'Default.UserPreferences'; }
        protected getDialogType() { return UserPreferencesDialog; }
        protected getIdProperty() { return UserPreferencesRow.idProperty; }
        protected getLocalTextPrefix() { return UserPreferencesRow.localTextPrefix; }
        protected getService() { return UserPreferencesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}