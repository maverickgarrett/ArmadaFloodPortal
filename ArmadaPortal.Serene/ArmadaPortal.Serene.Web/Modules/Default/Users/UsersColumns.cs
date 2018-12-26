
namespace ArmadaPortal.Serene.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Users")]
    [BasedOnRow(typeof(Entities.UsersRow), CheckNames = true)]
    public class UsersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UserId { get; set; }
        [EditLink]
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public String Source { get; set; }
        public String PasswordHash { get; set; }
        public String PasswordSalt { get; set; }
        public DateTime LastDirectoryUpdate { get; set; }
        public String UserImage { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int16 IsActive { get; set; }
    }
}