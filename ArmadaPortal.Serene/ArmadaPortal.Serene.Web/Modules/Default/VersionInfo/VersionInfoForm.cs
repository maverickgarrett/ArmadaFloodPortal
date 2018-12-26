
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.VersionInfo")]
    [BasedOnRow(typeof(Entities.VersionInfoRow), CheckNames = true)]
    public class VersionInfoForm
    {
        public DateTime AppliedOn { get; set; }
        public String Description { get; set; }
    }
}