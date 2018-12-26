
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class ExceptionsDialog extends Serenity.EntityDialog<ExceptionsRow, any> {
        protected getFormKey() { return ExceptionsForm.formKey; }
        protected getIdProperty() { return ExceptionsRow.idProperty; }
        protected getLocalTextPrefix() { return ExceptionsRow.localTextPrefix; }
        protected getNameProperty() { return ExceptionsRow.nameProperty; }
        protected getService() { return ExceptionsService.baseUrl; }

        protected form = new ExceptionsForm(this.idPrefix);

    }
}