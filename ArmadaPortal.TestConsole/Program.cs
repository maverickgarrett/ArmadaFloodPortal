using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ArmadaPortal.Data;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core;
using ArmadaPortal.Data.Repositories;
using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using AutoMapper;

namespace ArmadaPortal.TestConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            // The code provided will print ‘Hello World’ to the console.
            // Press Ctrl+F5 (or go to Debug > Start Without Debugging) to run your app.
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



                    var floodRiskOrder = new FloodRiskOrder();
                    floodRiskOrder.Id = Guid.NewGuid();
                    floodRiskOrder.Account = new EntityReference(Account.EntityLogicalName, SampleAccountId);
                    floodRiskOrder.Branch = new EntityReference(Account.EntityLogicalName, SampleBranchId);
                    floodRiskOrder.OrderDate = DateTime.UtcNow;
                    floodRiskOrder.LoanType = LoanType.Commercial;
                    //floodRiskOrder.ContactID = new EntityReference(Contact.EntityLogicalName, SampleContactId);
                    floodRiskOrder.EmailCertCC = "Test@test.com";
                    floodRiskOrder.EmailCertTo = "TestCc@test.com";
                    floodRiskOrder.OrderType = OrderType.Basic;
                    floodRiskOrder.FloodDetStatus= FloodDeterminationStatus.Draft;
                    floodRiskOrder.Borrower = "Roen Real Estate Holdings, LLC";
                    floodRiskOrder.UrgentIndicator = false;
                    floodRiskOrder.AdditionalInformation = "Note To Analyst Entered from Portal";
                    floodRiskOrder.AddressLegalNumber = "LegalNumber001";

                    //new FOptionSetValue(FloodDeterminationStatus.Assigned as int));
                    floodRiskOrder.Address1Orig = "Test 1234 Lane";
                    floodRiskOrder.Address2Orig = "";
                    floodRiskOrder.CityOrig = "Greenville";
                    floodRiskOrder.StateOrig = "SC";
                    floodRiskOrder.ZipOrig = "29607";
                    floodRiskOrder.EnteredCountry = "US";

                    floodRiskOrder.Address1Matched = "Test 1234 Lane";
                    floodRiskOrder.Address2Matched = "";
                    floodRiskOrder.CityMatched = "Greenville";
                    floodRiskOrder.StateMatched = "SC";
                    floodRiskOrder.ZipMatched = "29607";
                    floodRiskOrder.MatchedCountry = "US";
                    serviceClient.AddObject(floodRiskOrder);
                    serviceClient.SaveChanges();

                    newOrderId = floodRiskOrder.Id;



                    var newOrders = serviceClient.FloodRiskOrderSet.Where(x => x.Account.Id == SampleAccountId).ToList();

                    if (newOrders != null && newOrders.Count > 0)
                    {
                        Console.WriteLine("There are {0} Orders in FloodOrders now", newOrders.Count);
                    }
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

            var orderRepoQuery = new OrderRepository(context);
            var allOrders = orderRepoQuery.GetAllOrdersForAccount().ToList();

        }
    }
}
