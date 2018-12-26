namespace ArmadaPortal.Flood.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Flood.DocumentImport")]
    public class DocumentImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
