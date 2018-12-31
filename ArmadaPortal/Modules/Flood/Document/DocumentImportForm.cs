namespace ArmadaPortal.Flood.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Flood.DocumentImport")]
    [BasedOnRow(typeof(Entities.DocumentRow), CheckNames = false)]
    public class DocumentImportForm
    {
        [Hidden]
        public string OrderId { get; set; }
        [MultipleFileUploadEditor, Required]
        public String UploadDocument { get; set; }
    }
}
