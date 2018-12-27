namespace ArmadaPortal.Flood.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Flood.DocumentImport")]
    public class DocumentImportForm
    {
        public string OrderId { get; set; }
        [MultipleFileUploadEditor, Required]
        public String UploadDocument { get; set; }
    }
}
