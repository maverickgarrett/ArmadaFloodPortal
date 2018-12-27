using AutoMapper.Configuration.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ArmadaPortal.Core.Models
{
    public class FloodOrder
    {
        public Guid? OrderId { get; set; }
        public Guid? AccountId { get; set; }
        public Guid? BranchId { get; set; }

        public virtual OrderAccount Account { get; set; }
        public virtual BranchAccount BranchAccount { get; set; }

        public string OrderNumber { get; set; }
        public string NotifyEmailTo { get; set; }
        public string NotifyEmailCC { get; set; }
        public User OrderedBy { get; set; }
        public User OrderContact { get; set; }

        public DateTime? OrderDate { get; set; }

        public OrderType? OrderType { get; set; }
        public string OrderTypeDescription { get; set; }
        public int? OrderTypeId { get; set; }

        public LoanType? LoanType { get; set; }
        public int? LoanTypeId { get; set; }
        public string LoanTypeDescription { get; set; }

        public FloodDeterminationStatus? DeterminationStatus { get; set; }
        public string DeterminationStatusDescription { get; set; }
        public int? DeterminationStatusId { get; set; }

        public DateTime? DeterminationDate { get; set; }
        public DateTime? EffectiveDate { get; set; }

        public string Borrower { get; set; }
        public string Borrower2 {get; set; }

        public string LoanNumber { get; set; }
        public string FloodZone { get; set; }
        public string ParcelNumber { get; set; }
        public string CommunityName { get; set; }
        public string CommunityNumber { get; set; }
        public string MapNumber { get; set; }
        public string NFIPProgramStatus { get; set; }
        public string Census { get; set; }
        public string County { get; set; }

        public string NotesToAnalyst { get; set; }

        public virtual OrderAddress AddressEntered { get; set; }
        public virtual OrderAddress AddressMatched { get; set; }
        public virtual IList<DownloadLink> CustomerUploadFiles { get; set; }
        public bool? ShowDownloadLink { get; set; }
        public virtual DownloadLink MainDownloadLink { get; set; }
        public virtual IList<DownloadLink> DownloadLinks { get; set; }
        public User ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public User InsertBy { get; set; }
        public DateTime? InsertDate { get; set; }



        public bool IsNew { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsRush { get; set; }

        public FloodOrder()
        {

        }

        public FloodOrder(FloodRiskOrder floodRiskOrder)
        {
            this.AccountId = floodRiskOrder.Account != null ? floodRiskOrder.Account.Id : Guid.Empty;
            this.BranchId = floodRiskOrder.Branch != null ? floodRiskOrder.Branch.Id : Guid.Empty;
            this.OrderId = floodRiskOrder.FloodRiskOrderId;
            this.OrderNumber = floodRiskOrder.OrderNumber;
            this.NotifyEmailTo = floodRiskOrder.EmailCertTo;
            this.NotifyEmailCC = floodRiskOrder.EmailCertCC;
            this.IsRush = floodRiskOrder.UrgentIndicator;

            this.Account = new OrderAccount
            {
                AccountId = floodRiskOrder.Account != null ? floodRiskOrder.Account.Id : Guid.Empty,
                AccountName = floodRiskOrder.Account != null ? floodRiskOrder.Account.Name : "no account",
            };
            this.BranchAccount = new BranchAccount
            {
                BranchAccountId = floodRiskOrder.Branch != null ? floodRiskOrder.Branch.Id : Guid.Empty,
                BranchName = floodRiskOrder.Branch != null ? floodRiskOrder.Branch.Name : "no branch"
            };
            this.AddressEntered = new OrderAddress
            {
                Address1 = floodRiskOrder.Address1Orig,
                Address2 = floodRiskOrder.Address2Orig,
                City = floodRiskOrder.CityOrig,
                State = floodRiskOrder.StateOrig,
                Zip = floodRiskOrder.ZipOrig,
                AddressFormatted = string.Format($"{floodRiskOrder.Address1Orig} {floodRiskOrder.CityOrig}, {floodRiskOrder.StateOrig} {floodRiskOrder.ZipOrig}")
            };
            this.AddressMatched = new OrderAddress
            {
                Address1 = floodRiskOrder.Address1Matched,
                Address2 = floodRiskOrder.Address2Matched,
                City = floodRiskOrder.CityMatched,
                State = floodRiskOrder.StateMatched,
                Zip = floodRiskOrder.ZipMatched,
                AddressFormatted = string.Format($"{floodRiskOrder.Address1Matched} {floodRiskOrder.CityMatched}, {floodRiskOrder.StateMatched} {floodRiskOrder.ZipMatched}")
            };
            this.OrderedBy = new User
            {
                UserId = floodRiskOrder.OrderedBy != null ? floodRiskOrder.OrderedBy.Id : Guid.Empty,
                UserName = floodRiskOrder.OrderedBy != null ? floodRiskOrder.OrderedBy.Name : "empty",
            };
            this.OrderContact = new User
            {
                UserId = floodRiskOrder.FloodOrderContactId != null ? floodRiskOrder.FloodOrderContactId.Id : Guid.Empty,
                UserName = floodRiskOrder.FloodOrderContactId != null ? floodRiskOrder.FloodOrderContactId.Name : "empty",
            };
            this.OrderDate = floodRiskOrder.OrderDate;
            this.OrderType = floodRiskOrder.OrderType;
            this.OrderTypeId = floodRiskOrder.OrderType.HasValue ? (int?)floodRiskOrder.OrderType.Value : null;


            this.OrderTypeDescription = floodRiskOrder.OrderType.HasValue ? floodRiskOrder.OrderType.ToString() : "";
            this.LoanType = floodRiskOrder.LoanType;
            this.LoanTypeId = floodRiskOrder.LoanType.HasValue ? (int?)floodRiskOrder.LoanType.Value : null;
            this.LoanTypeDescription = floodRiskOrder.LoanType.HasValue ? floodRiskOrder.LoanType.ToString() : "";
            this.DeterminationStatus = floodRiskOrder.FloodDetStatus;
            this.DeterminationStatusId = floodRiskOrder.FloodDetStatus.HasValue ? (int?)floodRiskOrder.FloodDetStatus.Value : null;
            this.DeterminationStatusDescription = floodRiskOrder.FloodDetStatus.HasValue ? floodRiskOrder.FloodDetStatus.ToString() : "";
            this.DeterminationDate = floodRiskOrder.FloodDetDate;
            this.EffectiveDate = floodRiskOrder.FloodLOMADate;
            this.Borrower = floodRiskOrder.Borrower;
            this.Borrower2 = floodRiskOrder.BorrowerNameAdditional;
            this.LoanNumber = floodRiskOrder.LoanNumber;
            this.ParcelNumber = floodRiskOrder.AddressLegalNumber;
            this.NotesToAnalyst = floodRiskOrder.AdditionalInformation;
            this.FloodZone = floodRiskOrder.FloodInfoZone;
            this.County = floodRiskOrder.FloodCounty;

            this.ModifiedBy = new User
            {
                UserId = floodRiskOrder.ModifiedBy != null ? floodRiskOrder.ModifiedBy.Id : Guid.Empty,
                UserName = floodRiskOrder.ModifiedBy != null ? floodRiskOrder.ModifiedBy.Name : "empty",
            };
            this.ModifiedDate = floodRiskOrder.ModifiedOn;

            this.InsertBy = new User
            {
                UserId = floodRiskOrder.CreatedBy != null ? floodRiskOrder.CreatedBy.Id : Guid.Empty,
                UserName = floodRiskOrder.CreatedBy != null ? floodRiskOrder.CreatedBy.Name : "empty",
            };
            this.InsertDate = floodRiskOrder.CreatedOn;


            if (floodRiskOrder.FloodDetStatus.HasValue && floodRiskOrder.FloodDetStatus.Value == FloodDeterminationStatus.Completed)
            {
                this.ShowDownloadLink = true;
                this.MainDownloadLink = new DownloadLink
                {
                    DownloadUrl = "#",
                    Title = "Flood Certificate",
                    AltText = "Flood Certificate"
                };


            }
            else
            {
                this.ShowDownloadLink = false;
            }

            this.DownloadLinks = new List<DownloadLink>();

    }
    }


}
