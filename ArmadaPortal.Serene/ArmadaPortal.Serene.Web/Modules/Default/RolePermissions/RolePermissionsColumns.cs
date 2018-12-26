
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.RolePermissions")]
    [BasedOnRow(typeof(Entities.RolePermissionsRow), CheckNames = true)]
    public class RolePermissionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RolePermissionId { get; set; }
        public String RoleRoleName { get; set; }
        [EditLink]
        public String PermissionKey { get; set; }
    }
}