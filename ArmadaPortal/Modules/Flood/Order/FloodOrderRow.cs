using System.Collections.Generic;

namespace ArmadaPortal.Flood.Entities
{
    using ArmadaPortal.Flood;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("ArmadaFlood"), Module("Flood"), TableName("FloodRiskOrder")]
    [DisplayName("Flood Orders"), InstanceName("Flood Order")]
    [ReadPermission(ArmadaPortal.Flood.PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.Modify)]
    [LookupScript]
    [CaptureLog(typeof(FloodOrderRow))]

    public sealed class FloodOrderRow : Row, INameRow, IIdRow
    {

        [DisplayName("Order ID"), Identity, Visible(false), HideOnUpdate(true)]
        public String OrderId
        {
            get { return Fields.OrderId[this].ToString(); }
            set { Fields.OrderId[this] = new Guid(value); }
        }
        
        [DisplayName("Account"),Visible(false), HideOnUpdate(true)]
        public String OrderAccountId
        {
            get { return Fields.OrderAccountId[this].ToString(); }
            set { Fields.OrderAccountId[this] = new Guid(value); }
        }

        [DisplayName("Account Name"), ReadOnly(true)]
        public String OrderAccountName
        {
            get { return Fields.OrderAccountName[this].ToString(); }
            set { Fields.OrderAccountName[this] = value; }
        }


        [DisplayName("Branch"), HideOnUpdate(true)]
        public String BranchId
        {
            get { return Fields.BranchName[this].ToString(); }
            set { Fields.BranchId[this] = new Guid(value); }
        }

        [DisplayName("BranchName"), ReadOnly(true)]
        public String BranchName
        {
            get { return Fields.BranchName[this].ToString(); }
            set { Fields.BranchName[this] = value; }
        }
        [DisplayName("BranchAbbrev")]
        public String BranchAbbrev
        {
            get { return Fields.BranchAbbrev[this].ToString(); }
            set { Fields.BranchAbbrev[this] = value; }
        }


        [DisplayName("Is Rush Order?")]
        public bool? IsUrgent
        {
            get { return Fields.IsUrgent[this]; }
            set { Fields.IsUrgent[this] = value; }
        }

        [DisplayName("Borrower"), NotNull]
        public String Borrower
        {
            get { return Fields.Borrower[this].ToString(); }
            set { Fields.Borrower[this] = value; }
        }

        [DisplayName("Borrower2")]
        public String Borrower2
        {
            get { return Fields.Borrower2[this].ToString(); }
            set { Fields.Borrower2[this] = value; }
        }


        [DisplayName("Order Status"), Size(30)]
        public FloodOrderDetStatusTypeEnum? FloodOrderStatus
        {
            get { return (FloodOrderDetStatusTypeEnum?)Fields.FloodOrderStatus[this]; }
            set { Fields.FloodOrderStatus[this] = (Int32?)value; }
        }

        [DisplayName("Order Status")]
        public String FloodOrderStatusDescription
        {
            get { return Fields.FloodOrderStatusDescription[this]; }
            set { Fields.FloodOrderStatusDescription[this] = value; }
        }


        [DisplayName("Loan Type"), LookupInclude]
        public FloodOrderLoanTypeEnum? LoanType
        {
            get { return (FloodOrderLoanTypeEnum?)Fields.LoanType[this]; }
            set { Fields.LoanType[this] = (Int32?)value; }
        }

        [DisplayName("Loan Number"), Size(20), QuickSearch(SearchType.StartsWith)]
        public String LoanNumber
        {
            get { return Fields.LoanNumber[this]; }
            set { Fields.LoanNumber[this] = value; }
        }

        [DisplayName("Created By"), ReadOnly(true)]
        public String OrderCreatedByName
        {
            get { return Fields.OrderCreatedByName[this]; }
            set { Fields.OrderCreatedByName[this] = value; }
        }

        [DisplayName("Created By"),Updatable(false)]
        public String OrderCreatedById
        {
            get { return Fields.OrderCreatedById[this].ToString(); }
            set { Fields.OrderCreatedById[this] = new Guid(value); }
        }

        [DisplayName("Order Contact Name"), ReadOnly(true)]
        public String OrderContactName
        {
            get { return Fields.OrderContactName[this]; }
            set { Fields.OrderContactName[this] = value; }
        }

        [DisplayName("Order Contact Id")]
        public String OrderContactId
        {
            get { return Fields.OrderContactId[this].ToString(); }
            set { Fields.OrderContactId[this] = new Guid(value); }
        }

        [DisplayName("Order Number"), Size(20), QuickSearch(SearchType.StartsWith), ReadOnly(true)]
        public String OrderNumber
        {
            get { return Fields.OrderNumber[this]; }
            set { Fields.OrderNumber[this] = value; }
        }


        [DisplayName("Order Date"), QuickSearch]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Address"), Size(120), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String AddressEnteredFormatted
        {
            get { return Fields.AddressEnteredFormatted[this]; }
            set { Fields.AddressEnteredFormatted[this] = value; }
        }

        [DisplayName("Address"), Size(60), QuickSearch(SearchType.StartsWith)]
        public String AddressMatchedFormatted
        {
            get { return Fields.AddressMatchedFormatted[this]; }
            set { Fields.AddressMatchedFormatted[this] = value; }
        }

        [DisplayName("Address"), Size(60), NotNull,QuickSearch(SearchType.StartsWith)]
        public String Address1Orig
        {
            get { return Fields.Address1Orig[this]; }
            set { Fields.Address1Orig[this] = value; }
        }

        [DisplayName("Apt Num"), Size(60), QuickSearch(SearchType.StartsWith)]
        public String Address2Orig
        {
            get { return Fields.Address2Orig[this]; }
            set { Fields.Address2Orig[this] = value; }
        }

        [DisplayName("City"), Size(60), NotNull, QuickSearch(SearchType.StartsWith)]
        public String CityOrig
        {
            get { return Fields.CityOrig[this]; }
            set { Fields.CityOrig[this] = value; }
        }

        [DisplayName("State"), Size(4), NotNull, QuickSearch(SearchType.StartsWith)]
        public String StateOrig
        {
            get { return Fields.StateOrig[this]; }
            set { Fields.StateOrig[this] = value; }
        }

        [DisplayName("Zip"), Size(60), NotNull, QuickSearch(SearchType.StartsWith)]
        public String ZipOrig
        {
            get { return Fields.ZipOrig[this]; }
            set { Fields.ZipOrig[this] = value; }
        }

        [DisplayName("Address Matched"), Size(60), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String Address1Matched
        {
            get { return Fields.Address1Matched[this]; }
            set { Fields.Address1Matched[this] = value; }
        }

        [DisplayName("Apt Num Matched"), Size(60), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String Address2Matched
        {
            get { return Fields.Address2Matched[this]; }
            set { Fields.Address2Matched[this] = value; }
        }

        [DisplayName("City Matched"), Size(60), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String CityMatched
        {
            get { return Fields.CityMatched[this]; }
            set { Fields.CityMatched[this] = value; }
        }

        [DisplayName("State Matched"), Size(4), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String StateMatched
        {
            get { return Fields.StateMatched[this]; }
            set { Fields.StateMatched[this] = value; }
        }

        [DisplayName("Zip Matched"), Size(60), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String ZipMatched
        {
            get { return Fields.ZipMatched[this]; }
            set { Fields.ZipMatched[this] = value; }
        }


        [DisplayName("Flood Zone"), Size(5), Updatable(false), QuickSearch(SearchType.StartsWith)]
        public String FloodZone
        {
            get { return Fields.FloodZone[this]; }
            set { Fields.FloodZone[this] = value; }
        }

        [DisplayName("Status Date"),Updatable(false)]
        public DateTime? FloodOrderStatusDate
        {
            get { return Fields.FloodOrderStatusDate[this]; }
            set { Fields.FloodOrderStatusDate[this] = value; }
        }

        [DisplayName("Insert Date"),Updatable(false)]
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

        [DisplayName("Email Cert TO"), EmailEditor, NotNull, Size(100)]
        public String EmailCertTo
        {
            get { return Fields.EmailCertTo[this]; }
            set { Fields.EmailCertTo[this] = value; }
        }

        [DisplayName("Email Cert CC"), EmailEditor, Size(100)]
        public String EmailCertCC
        {
            get { return Fields.EmailCertCC[this]; }
            set { Fields.EmailCertCC[this] = value; }
        }

        [DisplayName("Order Type"), NotNull, LookupInclude]
        public FloodOrderTypeEnum? OrderType
        {
            get { return (FloodOrderTypeEnum?)Fields.OrderType[this]; }
            set { Fields.OrderType[this] = (Int32?)value; }
        }

        [DisplayName("Analyst Note"), Size(200)]
        public String NoteToAnalyst
        {
            get { return Fields.NoteToAnalyst[this]; }
            set { Fields.NoteToAnalyst[this] = value; }
        }

        [DisplayName("Parcel Number"), Size(50)]
        public String ParcelNumber
        {
            get { return Fields.ParcelNumber[this]; }
            set { Fields.ParcelNumber[this] = value; }
        }

        [DisplayName("Upload Document PDF,DOC,JPG"), Size(100), MultipleFileUploadEditor]
        public String UploadDocument
        {
            get { return Fields.UploadDocument[this]; }
            set { Fields.UploadDocument[this] = value; }
        }

        public String UploadDocumentFileName
        {
            get { return Fields.UploadDocumentFileName[this]; }
            set { Fields.UploadDocumentFileName[this] = value; }
        }


        [DisplayName("Show Download Link?")]
        public bool? ShowDownloadLink
        {
            get { return Fields.ShowDownloadLink[this]; }
            set { Fields.ShowDownloadLink[this] = value; }
        }

        public String ShowDownloadLinkId
        {
            get { return Fields.ShowDownloadLinkId[this]; }
            set { Fields.ShowDownloadLinkId[this] = value; }
        }

        [DisplayName("Flood Determination Letter")]
        public Stream ApprovalLetter
        {
            get { return Fields.ApprovalLetter[this]; }
            set { Fields.ApprovalLetter[this] = value; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderNumber; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }



        public static readonly RowFields Fields = new RowFields().Init();

        public FloodOrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField OrderId;
            public DateTimeField OrderDate;
            public BooleanField IsUrgent;
            public Int32Field LoanType;
            public Int32Field OrderType;
            public GuidField OrderAccountId;
            public StringField OrderAccountName;
            public GuidField BranchId;
            public StringField BranchName;
            public StringField BranchAbbrev;
            public GuidField OrderCreatedById;
            public StringField OrderCreatedByName;
            public GuidField OrderContactId;
            public StringField OrderContactName;
            public StringField OrderNumber;
            public StringField EmailCertTo;
            public StringField EmailCertCC;
            public StringField Address1Orig;
            public StringField Address2Orig;
            public StringField CityOrig;
            public StringField StateOrig;
            public StringField ZipOrig;
            public StringField AddressEnteredFormatted;
            public StringField Address1Matched;
            public StringField Address2Matched;
            public StringField CityMatched;
            public StringField StateMatched;
            public StringField ZipMatched;
            public StringField AddressMatchedFormatted;
            public Int32Field FloodOrderStatus;
            public StringField FloodOrderStatusDescription;
            public DateTimeField FloodOrderStatusDate;
            public StringField LoanNumber;
            public StringField NoteToAnalyst;
            public StringField Borrower;
            public StringField Borrower2;
            public StringField FloodZone;
            public StringField ParcelNumber;
            public BooleanField ShowDownloadLink;
            public StringField ShowDownloadLinkId;
            public StringField UploadDocument;
            public StringField UploadDocumentFileName;
            public StreamField ApprovalLetter;
            public DateTimeField InsertDate;
            public DateTimeField ModifiedDate;
        }
    }
}