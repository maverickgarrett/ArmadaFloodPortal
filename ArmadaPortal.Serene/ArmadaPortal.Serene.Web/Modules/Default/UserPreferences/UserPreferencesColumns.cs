
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.UserPreferences")]
    [BasedOnRow(typeof(Entities.UserPreferencesRow), CheckNames = true)]
    public class UserPreferencesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserPreferenceId { get; set; }
        public Int64 UserId { get; set; }
        [EditLink]
        public String PreferenceType { get; set; }
        public String Name { get; set; }
        public String Value { get; set; }
    }
}