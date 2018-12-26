
namespace ArmadaPortal.Flood.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("ArmadaFlood"), Module("Flood"), TableName("Branch")]
    [DisplayName("Branches"), InstanceName("Branch")]
    [ReadPermission(ArmadaPortal.Flood.PermissionKeys.General)]
    [LookupScript(typeof(Lookups.BranchLookup))]

    public sealed class BranchRow : Row, IIdRow, INameRow
    {
        [DisplayName("Branch ID"), NotNull, Identity, QuickSearch, Updatable(false), LookupInclude]
        public String BranchId
        {
            get { return Fields.BranchId[this].ToString(); }
            set { Fields.BranchId[this] = value; }
        }

        [DisplayName("Branch Abbrev"), Size(30), QuickSearch]
        public String BranchAbbrev
        {
            get { return Fields.BranchAbbrev[this]; }
            set { Fields.BranchAbbrev[this] = value; }
        }

        [DisplayName("Branch Name"), QuickSearch]
        public String BranchName
        {
            get { return Fields.BranchName[this]; }
            set { Fields.BranchName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BranchId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BranchName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BranchRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField BranchId;
            public StringField BranchName;
            public StringField BranchAbbrev;
        }
    }
}