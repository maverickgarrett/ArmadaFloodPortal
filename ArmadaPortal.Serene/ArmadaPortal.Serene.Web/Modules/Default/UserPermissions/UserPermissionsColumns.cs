
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.UserPermissions")]
    [BasedOnRow(typeof(Entities.UserPermissionsRow), CheckNames = true)]
    public class UserPermissionsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 UserPermissionId { get; set; }
        public String UserUsername { get; set; }
        [EditLink]
        public String PermissionKey { get; set; }
        public Boolean Granted { get; set; }
    }
}