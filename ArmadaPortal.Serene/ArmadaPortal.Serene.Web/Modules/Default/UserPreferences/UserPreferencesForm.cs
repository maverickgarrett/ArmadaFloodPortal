
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.UserPreferences")]
    [BasedOnRow(typeof(Entities.UserPreferencesRow), CheckNames = true)]
    public class UserPreferencesForm
    {
        public Int64 UserId { get; set; }
        public String PreferenceType { get; set; }
        public String Name { get; set; }
        public String Value { get; set; }
    }
}