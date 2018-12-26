namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Flood.Entities;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using MyRow = ArmadaPortal.Flood.Entities.FloodOrderRow;


    public class FloodOrderSaveRequest : ServiceRequest
    {
        public Boolean? IsUrgent { get; set; }
        public String UploadDocumentFileName { get; set; }
        public String EmailCertTo { get; set; }
        public String EmailCertCC { get; set; }
        public Int32? OrderType { get; set; }
        public Int32? LoanType { get; set; }
        public String Borrower { get; set; }
        public String LoanNumber { get; set; }
        public String Address1Orig { get; set; }
        public String Address2Orig { get; set; }
        public String CityOrig { get; set; }
        public String StateOrig { get; set; }
        public String ZipOrig { get; set; }
        public String ParcelNumber { get; set; }
        public String NoteToAnalyst { get; set; }
        public String UploadDocument { get; set; }
    }



}