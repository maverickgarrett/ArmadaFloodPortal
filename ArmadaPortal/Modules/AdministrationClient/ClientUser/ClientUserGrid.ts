namespace ArmadaPortal.AdministrationClient {

    @Serenity.Decorators.registerClass()
    export class ClientUserGrid extends Serenity.EntityGrid<ClientUserRow, any> {
        protected getColumnsKey() { return "AdministrationClient.ClientUser"; }
        protected getDialogType() { return ClientUserDialog; }
        protected getIdProperty() { return ClientUserRow.idProperty; }
        protected getIsActiveProperty() { return ClientUserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return ClientUserRow.localTextPrefix; }
        protected getService() { return ClientUserService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getDefaultSortBy() {
            return [ClientUserRow.Fields.Username];
        }
    }
}