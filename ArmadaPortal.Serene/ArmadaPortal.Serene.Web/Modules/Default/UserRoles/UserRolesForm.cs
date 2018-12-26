
namespace ArmadaPortal.Serene.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.UserRoles")]
    [BasedOnRow(typeof(Entities.UserRolesRow), CheckNames = true)]
    public class UserRolesForm
    {
        public Int32 UserId { get; set; }
        public Int32 RoleId { get; set; }
    }
}