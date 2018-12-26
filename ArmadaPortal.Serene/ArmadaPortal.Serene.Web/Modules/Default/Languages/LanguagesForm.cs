
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Languages")]
    [BasedOnRow(typeof(Entities.LanguagesRow), CheckNames = true)]
    public class LanguagesForm
    {
        public String LanguageId { get; set; }
        public String LanguageName { get; set; }
    }
}