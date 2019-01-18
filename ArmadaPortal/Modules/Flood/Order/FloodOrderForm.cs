namespace ArmadaPortal.Flood.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ArmadaPortal.Flood;

    [FormScript("ArmadaPortal.FloodOrder")]
    [BasedOnRow(typeof(Entities.FloodOrderRow), CheckNames = false)]
    public class FloodOrderForm 
    {
        [Category("Notify")]
        [HideOnInsert]
        public String OrderAccountId { get; set; }
        [HideOnInsert]
        public String BranchId { get; set; }
        [HideOnInsert, HideOnUpdate]
        public String OrderNumber { get; set; }

        public Boolean IsUrgent { get; set; }
        [HalfWidth]
        [ReadOnly(true)]
        public String OrderCreatedByName { get; set; }
        [HalfWidth]
        [Hint("If you would like to CC someone when this order is completed")]
        public String EmailCertCC { get; set; }
        [Category("General")]
        [HalfWidth]
        public FloodOrderTypeEnum OrderType { get; set; }
        [HalfWidth]
        public FloodOrderLoanTypeEnum LoanType { get; set; }

        [HalfWidth]
        public String Borrower { get; set; }
        [HalfWidth]
        public String LoanNumber { get; set; }


        [Category("Address")]
        public String Address1Orig { get; set; }
        public String Address2Orig { get; set; }
        [MediumHalfWidth]
        public String CityOrig { get; set; }
        [MediumQuarterWidth]
        public String StateOrig { get; set; }
        [MediumQuarterWidth]
        public String ZipOrig { get; set; }

        public String ParcelNumber { get; set; }
        public String NoteToAnalyst { get; set; }
        public String OrderId { get; set; }
        [Category("Documents")]
        public String UploadDocument { get; set; }

    }
}