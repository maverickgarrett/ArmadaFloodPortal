
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Languages")]
    [BasedOnRow(typeof(Entities.LanguagesRow), CheckNames = true)]
    public class LanguagesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String LanguageId { get; set; }
        public String LanguageName { get; set; }
    }
}