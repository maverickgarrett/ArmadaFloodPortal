
namespace ArmadaPortal.Serene.Default {

    @Serenity.Decorators.registerClass()
    export class VersionInfoDialog extends Serenity.EntityDialog<VersionInfoRow, any> {
        protected getFormKey() { return VersionInfoForm.formKey; }
        protected getIdProperty() { return VersionInfoRow.idProperty; }
        protected getLocalTextPrefix() { return VersionInfoRow.localTextPrefix; }
        protected getNameProperty() { return VersionInfoRow.nameProperty; }
        protected getService() { return VersionInfoService.baseUrl; }

        protected form = new VersionInfoForm(this.idPrefix);

    }
}