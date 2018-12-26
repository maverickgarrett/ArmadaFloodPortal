
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class UsersGrid extends Serenity.EntityGrid<UsersRow, any> {
        protected getColumnsKey() { return 'Default.Users'; }
        protected getDialogType() { return UsersDialog; }
        protected getIdProperty() { return UsersRow.idProperty; }
        protected getLocalTextPrefix() { return UsersRow.localTextPrefix; }
        protected getService() { return UsersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}