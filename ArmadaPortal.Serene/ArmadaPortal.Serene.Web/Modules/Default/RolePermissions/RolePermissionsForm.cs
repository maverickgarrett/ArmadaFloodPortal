
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.RolePermissions")]
    [BasedOnRow(typeof(Entities.RolePermissionsRow), CheckNames = true)]
    public class RolePermissionsForm
    {
        public Int32 RoleId { get; set; }
        public String PermissionKey { get; set; }
    }
}