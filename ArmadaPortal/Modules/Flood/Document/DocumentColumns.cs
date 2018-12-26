namespace ArmadaPortal.Flood.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("ArmadaPortal.Document")]
    [BasedOnRow(typeof(Entities.DocumentRow), CheckNames = false)]
    public class DocumentColumns
    {
        [Hidden()]
        public String DocumentId { get; set; }
        public String DocumentType { get; set; }
        public String DocumentTitle { get; set; }
        public String DocumentName { get; set; }
        public DateTime? InsertDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

    }
}   