
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.UserPermissions")]
    [BasedOnRow(typeof(Entities.UserPermissionsRow), CheckNames = true)]
    public class UserPermissionsForm
    {
        public Int32 UserId { get; set; }
        public String PermissionKey { get; set; }
        public Boolean Granted { get; set; }
    }
}