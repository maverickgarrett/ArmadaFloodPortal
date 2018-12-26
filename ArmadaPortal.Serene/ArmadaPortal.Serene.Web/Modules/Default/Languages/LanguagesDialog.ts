
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class LanguagesDialog extends Serenity.EntityDialog<LanguagesRow, any> {
        protected getFormKey() { return LanguagesForm.formKey; }
        protected getIdProperty() { return LanguagesRow.idProperty; }
        protected getLocalTextPrefix() { return LanguagesRow.localTextPrefix; }
        protected getNameProperty() { return LanguagesRow.nameProperty; }
        protected getService() { return LanguagesService.baseUrl; }

        protected form = new LanguagesForm(this.idPrefix);

    }
}