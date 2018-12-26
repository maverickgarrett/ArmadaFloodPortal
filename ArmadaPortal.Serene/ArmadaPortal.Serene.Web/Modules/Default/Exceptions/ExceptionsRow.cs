
namespace ArmadaPortal.Serene.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Exceptions]")]
    [DisplayName("Exceptions"), InstanceName("Exceptions")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ExceptionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Guid"), Column("GUID"), NotNull]
        public Guid? Guid
        {
            get { return Fields.Guid[this]; }
            set { Fields.Guid[this] = value; }
        }

        [DisplayName("Application Name"), Size(50), NotNull, QuickSearch]
        public String ApplicationName
        {
            get { return Fields.ApplicationName[this]; }
            set { Fields.ApplicationName[this] = value; }
        }

        [DisplayName("Machine Name"), Size(50), NotNull]
        public String MachineName
        {
            get { return Fields.MachineName[this]; }
            set { Fields.MachineName[this] = value; }
        }

        [DisplayName("Creation Date"), NotNull]
        public DateTime? CreationDate
        {
            get { return Fields.CreationDate[this]; }
            set { Fields.CreationDate[this] = value; }
        }

        [DisplayName("Type"), Size(100), NotNull]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Is Protected"), NotNull]
        public Boolean? IsProtected
        {
            get { return Fields.IsProtected[this]; }
            set { Fields.IsProtected[this] = value; }
        }

        [DisplayName("Host"), Size(100)]
        public String Host
        {
            get { return Fields.Host[this]; }
            set { Fields.Host[this] = value; }
        }

        [DisplayName("Url"), Size(500)]
        public String Url
        {
            get { return Fields.Url[this]; }
            set { Fields.Url[this] = value; }
        }

        [DisplayName("Http Method"), Column("HTTPMethod"), Size(10)]
        public String HttpMethod
        {
            get { return Fields.HttpMethod[this]; }
            set { Fields.HttpMethod[this] = value; }
        }

        [DisplayName("Ip Address"), Column("IPAddress"), Size(40)]
        public String IpAddress
        {
            get { return Fields.IpAddress[this]; }
            set { Fields.IpAddress[this] = value; }
        }

        [DisplayName("Source"), Size(100)]
        public String Source
        {
            get { return Fields.Source[this]; }
            set { Fields.Source[this] = value; }
        }

        [DisplayName("Message"), Size(1000)]
        public String Message
        {
            get { return Fields.Message[this]; }
            set { Fields.Message[this] = value; }
        }

        [DisplayName("Detail")]
        public String Detail
        {
            get { return Fields.Detail[this]; }
            set { Fields.Detail[this] = value; }
        }

        [DisplayName("Status Code")]
        public Int32? StatusCode
        {
            get { return Fields.StatusCode[this]; }
            set { Fields.StatusCode[this] = value; }
        }

        [DisplayName("Sql"), Column("SQL")]
        public String Sql
        {
            get { return Fields.Sql[this]; }
            set { Fields.Sql[this] = value; }
        }

        [DisplayName("Deletion Date")]
        public DateTime? DeletionDate
        {
            get { return Fields.DeletionDate[this]; }
            set { Fields.DeletionDate[this] = value; }
        }

        [DisplayName("Full Json")]
        public String FullJson
        {
            get { return Fields.FullJson[this]; }
            set { Fields.FullJson[this] = value; }
        }

        [DisplayName("Error Hash")]
        public Int32? ErrorHash
        {
            get { return Fields.ErrorHash[this]; }
            set { Fields.ErrorHash[this] = value; }
        }

        [DisplayName("Duplicate Count"), NotNull]
        public Int32? DuplicateCount
        {
            get { return Fields.DuplicateCount[this]; }
            set { Fields.DuplicateCount[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ApplicationName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExceptionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public GuidField Guid;
            public StringField ApplicationName;
            public StringField MachineName;
            public DateTimeField CreationDate;
            public StringField Type;
            public BooleanField IsProtected;
            public StringField Host;
            public StringField Url;
            public StringField HttpMethod;
            public StringField IpAddress;
            public StringField Source;
            public StringField Message;
            public StringField Detail;
            public Int32Field StatusCode;
            public StringField Sql;
            public DateTimeField DeletionDate;
            public StringField FullJson;
            public Int32Field ErrorHash;
            public Int32Field DuplicateCount;
        }
    }
}
