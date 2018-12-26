
namespace ArmadaPortal.Serene.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[VersionInfo]")]
    [DisplayName("Version Info"), InstanceName("Version Info")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class VersionInfoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Version"), NotNull]
        public Int64? Version
        {
            get { return Fields.Version[this]; }
            set { Fields.Version[this] = value; }
        }

        [DisplayName("Applied On")]
        public DateTime? AppliedOn
        {
            get { return Fields.AppliedOn[this]; }
            set { Fields.AppliedOn[this] = value; }
        }

        [DisplayName("Description"), Size(1024), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Version; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Description; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VersionInfoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Version;
            public DateTimeField AppliedOn;
            public StringField Description;
        }
    }
}
