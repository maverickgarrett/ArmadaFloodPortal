
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.UserRoles")]
    [BasedOnRow(typeof(Entities.UserRolesRow), CheckNames = true)]
    public class UserRolesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 UserRoleId { get; set; }
        public String UserUsername { get; set; }
        public String RoleRoleName { get; set; }
    }
}