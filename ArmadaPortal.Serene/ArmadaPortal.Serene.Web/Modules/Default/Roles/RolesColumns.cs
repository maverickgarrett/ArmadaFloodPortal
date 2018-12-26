
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Roles")]
    [BasedOnRow(typeof(Entities.RolesRow), CheckNames = true)]
    public class RolesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RoleId { get; set; }
        [EditLink]
        public String RoleName { get; set; }
    }
}