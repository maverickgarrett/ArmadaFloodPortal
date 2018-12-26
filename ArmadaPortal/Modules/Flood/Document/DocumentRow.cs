
namespace ArmadaPortal.Flood.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("ArmadaFlood"), Module("Flood"), TableName("Document")]
    [DisplayName("Documents"), InstanceName("Document")]
    [ReadPermission(ArmadaPortal.Flood.PermissionKeys.General)]

    public sealed class DocumentRow : Row, IIdRow, INameRow
    {
        [DisplayName("Document ID"), NotNull, Identity, QuickSearch, Updatable(false), LookupInclude]
        public String DocumentId
        {
            get { return Fields.DocumentId[this].ToString(); }
            set { Fields.DocumentId[this] = value; }
        }

        [DisplayName("Type"), Size(10), QuickSearch]
        public String DocumentType
        {
            get { return Fields.DocumentType[this]; }
            set { Fields.DocumentType[this] = value; }
        }

        [DisplayName("Title"), Size(100), QuickSearch]
        public String DocumentTitle
        {
            get { return Fields.DocumentTitle[this]; }
            set { Fields.DocumentTitle[this] = value; }
        }


        [DisplayName("Document Name"), Size(50), QuickSearch]
        public String DocumentName
        {
            get { return Fields.DocumentName[this]; }
            set { Fields.DocumentName[this] = value; }
        }

        [DisplayName("Download Link"), Size(50)]
        public String DocumentUrl
        {
            get { return Fields.DocumentUrl[this]; }
            set { Fields.DocumentUrl[this] = value; }
        }


        [DisplayName("Insert Date"), Updatable(false)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Modified Date"), Updatable(false)]
        public DateTime? ModifiedDate
        {
            get { return Fields.ModifiedDate[this]; }
            set { Fields.ModifiedDate[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.DocumentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField DocumentId;
            public StringField DocumentType;
            public StringField DocumentTitle;
            public StringField DocumentName;
            public StringField DocumentUrl;
            public DateTimeField InsertDate;
            public DateTimeField ModifiedDate;
        }
    }
}