
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.VersionInfo")]
    [BasedOnRow(typeof(Entities.VersionInfoRow), CheckNames = true)]
    public class VersionInfoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Version { get; set; }
        public DateTime AppliedOn { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}