
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Roles")]
    [BasedOnRow(typeof(Entities.RolesRow), CheckNames = true)]
    public class RolesForm
    {
        public String RoleName { get; set; }
    }
}