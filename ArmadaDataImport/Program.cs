using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System.ServiceModel;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Crm.Sdk.Messages;

using ArmadaPortal.Data;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core;
using ArmadaPortal.Data.Repositories;
using LINQtoCSV;
using System.IO;
using Sasha.Exceptions;
using Sasha.ExtensionMethods;

using XrmLibrary.EntityHelpers.Annotation;
using XrmLibrary.EntityHelpers.Utils;







namespace ArmadaDataImport
{
    class Program
    {
        static void Main(string[] args)
        {
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
            var runner = new ImportWithCreate();
            runner.Run();
            //runner.CreatePdfFromDirectory();

            // Go to http://aka.ms/dotnet-get-started-console to continue learning how to build a console app! 
        }


        public class ImportWithCreate
        {
            #region Class Level Members

            private OrganizationServiceProxy _serviceProxy;
            private DateTime _executionDate;

            #endregion

            /// <summary>
            /// This method first connects to the organization service. Afterwards,
            /// auditing is enabled on the organization, account entity, and a couple
            /// of attributes.
            /// </summary>
            /// <param name="serverConfig">Contains server connection information.</param>
            /// <param name="promptforDelete">When True, the user will be prompted to delete all
            /// created entities.</param>
            /// 
            public void CreatePdfFromDirectory()
            {
                foreach (string file in Directory.EnumerateFiles("C:\\pdfimport\\", "*.pdf"))
                {
                    Console.WriteLine($"FileName: {file}");

                    //string contents = File.ReadAllText(file);
                }
                Console.ReadKey();
            }
            public void Run()
            {
                Console.WriteLine("Hello World!");
                Console.ReadKey();
                var SampleAccountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
                var SampleBranchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
                var SampleContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");
                var newOrderId = Guid.Empty;

                var context = new CrmContext();

                WhoAmIResponse response = null;


                if (context != null)
                {
                    response = (WhoAmIResponse)context.WebProxyClient.Execute(new WhoAmIRequest());
                    Console.WriteLine("WhoAmI UserID: " + response.UserId);
                }


                if (context != null)
                {
                    using (var xrmContext = new CrmContext())
                    {
                        var serviceClient = xrmContext.XrmServiceContext;
                        //// Create an account record  
                        //Dictionary<string, CrmDataTypeWrapper> inData = new Dictionary<string, CrmDataTypeWrapper>();
                        //inData.Add("name", new CrmDataTypeWrapper("Sample Account Name", CrmFieldType.String));
                        //inData.Add("address1_city", new CrmDataTypeWrapper("Redmond", CrmFieldType.String));
                        //inData.Add("telephone1", new CrmDataTypeWrapper("555-0160", CrmFieldType.String));
                        //accountId = ctrl.CrmConnectionMgr.CrmSvc.CreateNewRecord("account", inData);


                        //var floodOrdersCSV = BulkImportHelper.ReadCsvFile("importorders.csv");


                        CsvFileDescription inputFileDescription = new CsvFileDescription
                        {
                            SeparatorChar = ',',
                            FirstLineHasColumnNames = true
                        };

                        CsvContext cc = new CsvContext();

                        IEnumerable<FloodOrderCsv> floodOrdersCsv =
                            cc.Read<FloodOrderCsv>("importorders.csv", inputFileDescription);

                        foreach (var item in floodOrdersCsv) {
                            Console.WriteLine($"Order Number: {item.OrderNumber} read");
                            if (item.AccountName == "Ally Bank")
                            {
                                if (!string.IsNullOrEmpty(item.DocumentFilename))
                                {
                                    var baseImportDirectory = "c:\\pdfimport\\";
                                    var fullFileNamePath = baseImportDirectory + item.DocumentFilename.Trim();
                                    if (File.Exists(fullFileNamePath))
                                    {
                                        var orderId = xrmContext.XrmServiceContext.FloodRiskOrderSet.Where(x => x.OrderNumber == item.OrderNumber).FirstOrDefault();

                                        if (orderId != null && !string.IsNullOrEmpty(orderId.Id.ToString()))
                                        {
                                            Console.WriteLine("Found Order: ", orderId.Id);
                                            var newFloodId = Guid.NewGuid();
                                            var newFloodOrderDocument = new FloodRiskOrderDocument();
                                            newFloodOrderDocument.Id = newFloodId;
                                            newFloodOrderDocument.FloodRiskOrder = new EntityReference(FloodRiskOrder.EntityLogicalName, orderId.Id);
                                            newFloodOrderDocument.ShowinPortal = true;
                                            if (item.DocumentFilename.Contains("Flood_Order")) {
                                                newFloodOrderDocument.DocumentType = DocumentType.FloodDeterminationLetter;
                                                    }
                                            else
                                            {
                                                newFloodOrderDocument.DocumentType = DocumentType.General;
                                            }

                                            newFloodOrderDocument.Name = item.DocumentFilename.Trim();

                                            serviceClient.AddObject(newFloodOrderDocument);
                                            serviceClient.SaveChanges();


                                            // Download the attachment in the current execution folder.
                                            using (FileStream fileStream = new FileStream(fullFileNamePath, FileMode.Open, FileAccess.Read))
                                            {
                                                var fileData = AttachmentHelper.CreateFromStream(fileStream, item.DocumentFilename.Trim());
                                                var note = new Annotation()
                                                {
                                                    Subject = "",
                                                    NoteText = "Imported from FileMakerDB",
                                                    DocumentBody = fileData.Data.Base64,
                                                    FileName = fileData.Meta.Name,
                                                    MimeType = fileData.Meta.MimeType,
                                                    Id = Guid.NewGuid(),
                                                    // Associate the note to the contact.
                                                    ObjectId = newFloodOrderDocument.ToEntityReference(),
                                                    ObjectTypeCode = FloodRiskOrderDocument.EntityLogicalName
                                                };

                                                try
                                                {
                                                    serviceClient.AddObject(note);
                                                    serviceClient.SaveChanges();
                                                    serviceClient.ClearChanges();
                                                }
                                                catch { }
                                            }



                                        }
                                        Console.WriteLine("Found File: ", fullFileNamePath);
                                    }
                                }

                                //var newFloodOrder = MapFloodCsvToOrder(item);
                                //serviceClient.AddObject(newFloodOrder);
                                //serviceClient.SaveChanges();
                                //newOrderId = newFloodOrder.Id;
                                //Console.WriteLine($"Record Created for {newFloodOrder.Borrower}");
                             }
                             else
                            {
                                Console.WriteLine($"Skipped Account record for {item.AccountName}");
                            }
                        }

                        //var floodRiskOrder = new FloodRiskOrder();
                        //floodRiskOrder.Id = Guid.NewGuid();
                        //floodRiskOrder.Account = new EntityReference(Account.EntityLogicalName, SampleAccountId);
                        //floodRiskOrder.Branch = new EntityReference(Account.EntityLogicalName, SampleBranchId);
                        //floodRiskOrder.OrderDate = DateTime.UtcNow;
                        //floodRiskOrder.LoanType = LoanType.Commercial;
                        ////floodRiskOrder.ContactID = new EntityReference(Contact.EntityLogicalName, SampleContactId);
                        //floodRiskOrder.EmailCertCC = "Test@test.com";
                        //floodRiskOrder.EmailCertTo = "TestCc@test.com";
                        //floodRiskOrder.OrderType = ArmadaPortal.Core.OrderType.Basic;
                        //floodRiskOrder.FloodDetStatus = FloodDeterminationStatus.Draft;
                        //floodRiskOrder.Borrower = "Roen Real Estate Holdings, LLC";
                        //floodRiskOrder.UrgentIndicator = false;
                        //floodRiskOrder.AdditionalInformation = "Note To Analyst Entered from Portal";
                        //floodRiskOrder.AddressLegalNumber = "LegalNumber001";

                        ////new FOptionSetValue(FloodDeterminationStatus.Assigned as int));
                        //floodRiskOrder.Address1Orig = "Test 1234 Lane";
                        //floodRiskOrder.Address2Orig = "";
                        //floodRiskOrder.CityOrig = "Greenville";
                        //floodRiskOrder.StateOrig = "SC";
                        //floodRiskOrder.ZipOrig = "29607";
                        //floodRiskOrder.EnteredCountry = "US";

                        //floodRiskOrder.Address1Matched = "Test 1234 Lane";
                        //floodRiskOrder.Address2Matched = "";
                        //floodRiskOrder.CityMatched = "Greenville";
                        //floodRiskOrder.StateMatched = "SC";
                        //floodRiskOrder.ZipMatched = "29607";
                        //floodRiskOrder.MatchedCountry = "US";
                        //serviceClient.AddObject(floodRiskOrder);
                        //serviceClient.SaveChanges();

                        //newOrderId = floodRiskOrder.Id;



                        //var newOrders = serviceClient.FloodRiskOrderSet.Where(x => x.Account.Id == SampleAccountId).ToList();

                        //if (newOrders != null && newOrders.Count > 0)
                        //{
                        //    Console.WriteLine("There are {0} Orders in FloodOrders now", newOrders.Count);
                        //}
                        //var note = new Annotation()
                        //{
                        //    Subject = "Note subject...",
                        //    NoteText = "Note Details....",
                        //    DocumentBody = Convert.ToBase64String(data),
                        //    FileName = Path.GetFileName(attachment.Name),
                        //    MimeType = "text/plain",
                        //    Id = Guid.NewGuid(),
                        //    // Associate the note to the contact.
                        //    ObjectId = contact.ToEntityReference(),
                        //    ObjectTypeCode = Contact.EntityLogicalName
                        //};


                    }
                    Console.WriteLine("New Order ID: " + newOrderId);
                    Console.WriteLine("Press Any Key to Continue");
                    Console.ReadKey();
                }

                //var orderRepoQuery = new OrderRepository(context);
                //var allOrders = orderRepoQuery.GetAllOrdersForAccount().ToList();

            }



            public FloodRiskOrder MapFloodCsvToOrder(FloodOrderCsv floodOrderInput)
            {

                var SampleAccountId = new Guid("cfd96059-adbb-e811-a965-000d3a32c8b8");
                var SampleBranchId = new Guid("21ad0673-adbb-e811-a965-000d3a32c8b8");
                var SampleContactId = new Guid("f8e744e1-adbb-e811-a965-000d3a32c8b8");

                var floodRiskOrder = new FloodRiskOrder();

                floodRiskOrder.Id = Guid.NewGuid();
                floodRiskOrder.FloodOrderName = floodOrderInput.OrderNumber;
                floodRiskOrder.Account = new EntityReference(Account.EntityLogicalName, SampleAccountId);
                floodRiskOrder.Branch = new EntityReference(Account.EntityLogicalName, SampleBranchId);
                floodRiskOrder.OrderDate = DateTime.UtcNow;
                floodRiskOrder.LoanType = LoanType.Commercial;
                floodRiskOrder.FloodOrderContactId = new EntityReference(Contact.EntityLogicalName, SampleContactId);
                floodRiskOrder.EmailCertCC = floodOrderInput.Contact_Email;
                floodRiskOrder.EmailCertTo = floodOrderInput.Contact_Additional_Email;
                floodRiskOrder.OrderType = ArmadaPortal.Core.OrderType.LifeOfLoan;
                floodRiskOrder.FloodDetStatus = FloodDeterminationStatus.Completed;
                floodRiskOrder.Borrower = floodOrderInput.Borrower;
                floodRiskOrder.Case = floodOrderInput.CaseNumber;
                if (!string.IsNullOrEmpty(floodOrderInput.CRBADate))
                {
                    floodRiskOrder.CRBADate = DateTime.Parse(floodOrderInput.CRBADate);
                }
                floodRiskOrder.Community = floodOrderInput.Community;
                floodRiskOrder.CommunityNumber = floodOrderInput.Community_Number;
                floodRiskOrder.FloodCounty = floodOrderInput.County;
                floodRiskOrder.EnteredCountry = "US";
                floodRiskOrder.MatchedCountry = "US";

                if (!string.IsNullOrEmpty(floodOrderInput.Determination_Date))
                {
                    floodRiskOrder.FloodDetDate = DateTime.Parse(floodOrderInput.Determination_Date);
                }

                floodRiskOrder.Address1Orig = floodOrderInput.Entered_Address_1;
                floodRiskOrder.Address2Orig = floodOrderInput.Entered_Address_2;
                floodRiskOrder.CityOrig = floodOrderInput.Entered_Address_city;
                floodRiskOrder.StateOrig = floodOrderInput.Entered_Address_state;
                floodRiskOrder.ZipOrig = floodOrderInput.Entered_Address_zip;

                floodRiskOrder.Address1Matched = floodOrderInput.Matched_Address_1;
                floodRiskOrder.Address2Matched = floodOrderInput.Matched_Address_2;
                floodRiskOrder.CityMatched = floodOrderInput.Matched_Address_city;
                floodRiskOrder.StateMatched = floodOrderInput.Matched_Address_state;
                floodRiskOrder.ZipMatched = floodOrderInput.Matched_Address_zip;
                floodRiskOrder.AddressLegalNumber = floodOrderInput.Matched_Address_legal;

                floodRiskOrder.HMDA = floodOrderInput.HMDA;

                if (!string.IsNullOrEmpty(floodOrderInput.Longitude))
                {
                    try
                    {
                        floodRiskOrder.LocationLong = Double.Parse(floodOrderInput.Longitude);
                    }
                    catch { }

                }

                if (!string.IsNullOrEmpty(floodOrderInput.Latitude))
                {
                    try
                    {
                        floodRiskOrder.LocationLat = Double.Parse(floodOrderInput.Latitude);
                    }
                    catch { }
                }

                floodRiskOrder.FloodMapNumber = floodOrderInput.Map_Number;

                if (!string.IsNullOrEmpty(floodOrderInput.LOMA_date))
                {
                    floodRiskOrder.FloodLOMADate = DateTime.Parse(floodOrderInput.LOMA_date);
                }
                floodRiskOrder.FloodNFIPStatus = FloodNFIPStatus.Regular;

                if (!string.IsNullOrEmpty(floodOrderInput.Order_date))
                {
                    floodRiskOrder.OrderDate = DateTime.Parse(floodOrderInput.Order_date);
                }
                floodRiskOrder.FloodInfoZone = floodOrderInput.Zone;

                floodRiskOrder.LoanNumber = floodOrderInput.Loan_number;
                floodRiskOrder.OrderNumber = floodOrderInput.Certificate_Number;


                floodRiskOrder.UrgentIndicator = false;
                floodRiskOrder.AdditionalInformation = string.Format($"Orderd by {floodOrderInput.Ordered_By} on {floodOrderInput.Order_date} {floodOrderInput.ordered_time} Entered By {floodOrderInput.UserName_Created} Modified By {floodOrderInput.UserName_Modified}");
                return floodRiskOrder;
            }


        }







}

    class FloodOrderCsv
    {
        [CsvColumn(Name = "_id_order", FieldIndex = 1, CanBeNull = true)]
        public string OrderNumber { get; set; }

        [CsvColumn(Name = "Account_Name", FieldIndex = 2)]
        public string AccountName { get; set; }

        [CsvColumn(Name = "Borrower", FieldIndex = 3)]
        public string Borrower { get; set; }

        [CsvColumn(Name = "Branch_Name", FieldIndex = 4)]
        public string Branch_Name { get; set; }

        [CsvColumn(Name = "c_document_files", FieldIndex = 5)]
        public string DocumentFilename { get; set; }

        [CsvColumn(Name = "Case_Number", FieldIndex = 6)]
        public string CaseNumber { get; set; }
        [CsvColumn(Name = "CBRA_date", FieldIndex = 7)]
        public string CRBADate { get; set; }
        [CsvColumn(Name = "Certificate_Number", FieldIndex = 8)]
        public string Certificate_Number { get; set; }
        [CsvColumn(Name = "Community", FieldIndex = 9)]
        public string Community { get; set; }
        [CsvColumn(Name = "Community_Number", FieldIndex = 10)]
        public string Community_Number { get; set; }
        [CsvColumn(Name = "Contact_Additional_Email", FieldIndex = 11)]
        public string Contact_Additional_Email { get; set; }
        [CsvColumn(Name = "Contact_Email", FieldIndex = 12)]
        public string Contact_Email { get; set; }

        [CsvColumn(Name = "County", FieldIndex = 13)]
        public string County { get; set; }


        [CsvColumn(Name = "Contact_Name", FieldIndex = 14)]
        public string Contact_Name { get; set; }
        [CsvColumn(Name = "Date_Created", FieldIndex = 15)]
        public string Date_Created { get; set; }
        [CsvColumn(Name = "Date_Modified", FieldIndex = 16)]
        public string Date_Modified { get; set; }
        [CsvColumn(Name = "Determination_Date", FieldIndex = 17)]
        public string Determination_Date { get; set; }
        [CsvColumn(Name = "Determination_Status", FieldIndex = 18)]
        public string Determination_Status { get; set; }
        [CsvColumn(Name = "Determination_Time", FieldIndex = 19)]
        public string Determination_Time { get; set; }
        [CsvColumn(Name = "Distance_Buffer", FieldIndex = 20)]
        public string Distance_Buffer { get; set; }
        [CsvColumn(Name = "Entered_Address_1", FieldIndex = 21)]
        public string Entered_Address_1 { get; set; }
        [CsvColumn(Name = "Entered_Address_2", FieldIndex = 22)]
        public string Entered_Address_2 { get; set; }
        [CsvColumn(Name = "Entered_Address_city", FieldIndex = 23)]
        public string Entered_Address_city { get; set; }
        [CsvColumn(Name = "Entered_Address_Legal", FieldIndex = 24)]
        public string Entered_Address_Legal { get; set; }
        [CsvColumn(Name = "Entered_Address_Notes_to_Analyst", FieldIndex = 25)]
        public string Entered_Address_Notes_to_Analyst { get; set; }
        [CsvColumn(Name = "Entered_Address_state", FieldIndex = 26)]
        public string Entered_Address_state { get; set; }
        [CsvColumn(Name = "Entered_Address_zip", FieldIndex = 27)]
        public string Entered_Address_zip { get; set; }
        [CsvColumn(Name = "flag_no_map", FieldIndex = 28)]
        public string flag_no_map { get; set; }
        [CsvColumn(Name = "flag_rush", FieldIndex = 29)]
        public string flag_rush { get; set; }
        [CsvColumn(Name = "FZ_Distance", FieldIndex = 30)]
        public string FZ_Distance { get; set; }
        [CsvColumn(Name = "HMDA", FieldIndex = 31)]
        public string HMDA { get; set; }
        [CsvColumn(Name = "Latitude", FieldIndex = 32)]
        public string Latitude { get; set; }
        [CsvColumn(Name = "Loan_number", FieldIndex = 33)]
        public string Loan_number { get; set; }
        [CsvColumn(Name = "Loan_Status", FieldIndex = 34)]
        public string Loan_Status { get; set; }
        [CsvColumn(Name = "Loan_Type", FieldIndex = 35)]
        public string Loan_Type { get; set; }
        [CsvColumn(Name = "LOMA_date", FieldIndex = 36)]
        public string LOMA_date { get; set; }
        [CsvColumn(Name = "Longitude", FieldIndex = 37)]
        public string Longitude { get; set; }
        [CsvColumn(Name = "Map_Number", FieldIndex = 38)]
        public string Map_Number { get; set; }
        [CsvColumn(Name = "Matched_Address_1", FieldIndex = 39)]
        public string Matched_Address_1 { get; set; }
        [CsvColumn(Name = "Matched_Address_2", FieldIndex = 40)]
        public string Matched_Address_2 { get; set; }
        [CsvColumn(Name = "Matched_Address_city", FieldIndex = 41)]
        public string Matched_Address_city { get; set; }
        [CsvColumn(Name = "Matched_Address_legal", FieldIndex = 42)]
        public string Matched_Address_legal { get; set; }
        [CsvColumn(Name = "Matched_Address_state", FieldIndex = 43)]
        public string Matched_Address_state { get; set; }
        [CsvColumn(Name = "Matched_Address_zip", FieldIndex = 44)]
        public string Matched_Address_zip { get; set; }
        [CsvColumn(Name = "Name", FieldIndex = 45)]
        public string Name { get; set; }
        [CsvColumn(Name = "NFIP_Program_Status", FieldIndex = 46)]
        public string NFIP_Program_Status { get; set; }
        [CsvColumn(Name = "Order_date", FieldIndex = 47)]
        public string Order_date { get; set; }
        [CsvColumn(Name = "Order_Type", FieldIndex = 48)]
        public string Order_Type { get; set; }
        [CsvColumn(Name = "Ordered_By", FieldIndex = 49)]
        public string Ordered_By { get; set; }
        [CsvColumn(Name = "ordered_time", FieldIndex = 50)]
        public string ordered_time { get; set; }
        [CsvColumn(Name = "Panel_date", FieldIndex = 51)]
        public string Panel_date { get; set; }
        [CsvColumn(Name = "UserName_Created", FieldIndex = 52)]
        public string UserName_Created { get; set; }
        [CsvColumn(Name = "UserName_Modified", FieldIndex = 53)]
        public string UserName_Modified { get; set; }
        [CsvColumn(Name = "Zone", FieldIndex = 54)]
        public string Zone { get; set; }

        //[CsvColumn(FieldIndex = 2, OutputFormat = "dd MMM HH:mm:ss")]
        //public DateTime LaunchDate { get; set; }
        //[CsvColumn(FieldIndex = 3, CanBeNull = false, OutputFormat = "C")]
        //public decimal Price { get; set; }

    }
}
