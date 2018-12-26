
namespace ArmadaPortal.Flood
{
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;
    using ArmadaPortal.Flood.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using MyRow = ArmadaPortal.Flood.Entities.FloodOrderRow;

    [Report("ArmadaPortal.FloodOrderReport")]
    [ReportDesign(MVC.Views.Flood.Order.FloodOrderReport)]
    [RequiredPermission(PermissionKeys.General)]
    public class FloodOrderReport : IReport, ICustomizeHtmlToPdf
    {
        public String OrderNumber { get; set; }
        public Guid? OrderId { get; set; }
        public Guid? DocumentId { get; set; }

        private readonly IOrderRepository _orderRepository;

        public FloodOrderReport() {
            _orderRepository = new OrderRepository();
        }

        public FloodOrderReport(IOrderRepository orderRepository)
        {
            _orderRepository = new OrderRepository();
        }

        public object GetData()
        {
            var data = new FloodOrderReportData();

            if (OrderId == null)
            {
                throw DataValidation.ArgumentNull("Order ID Found");
            }
            var baseCrmOrder = _orderRepository.GetOrderById(OrderId.Value);
            //var baseCrmOrder = _orderRepository.GetOrderByNumber(OrderNumber);

            if (baseCrmOrder == null)
            {
                throw DataValidation.ArgumentNull("Order Not Found");
            }

            if (baseCrmOrder.BranchAccount.BranchAccountId != null)
            {
                if (baseCrmOrder.OrderId != null)
                {
                    if (baseCrmOrder.Account.AccountId != null)
                    {
                        var myOrder = new MyRow
                        {
                            OrderNumber = baseCrmOrder.OrderNumber,
                            OrderId = baseCrmOrder.OrderId.Value.ToString(),
                            OrderDate = baseCrmOrder.OrderDate,
                            IsUrgent = baseCrmOrder.IsRush,
                            OrderAccountName = baseCrmOrder.Account.AccountName,
                            BranchName = baseCrmOrder.BranchAccount.BranchName,
                            Borrower = baseCrmOrder.Borrower,
                            Borrower2 = baseCrmOrder.Borrower2,
                            BranchId = baseCrmOrder.BranchAccount.BranchAccountId.Value.ToString(),
                            BranchAbbrev = baseCrmOrder.BranchAccount.Abbreviation,
                            OrderAccountId = baseCrmOrder.Account.AccountId.Value.ToString(),
                            LoanType = (FloodOrderLoanTypeEnum?)baseCrmOrder.LoanTypeId,
                            LoanNumber = baseCrmOrder.LoanNumber,
                            OrderType = (FloodOrderTypeEnum?)baseCrmOrder.OrderTypeId,
                            OrderContactName = baseCrmOrder.OrderContact.FullName,
                            OrderContactId = baseCrmOrder.OrderContact.UserId.ToString(),
                            OrderCreatedByName = baseCrmOrder.OrderedBy.FullName,
                            OrderCreatedById = baseCrmOrder.OrderedBy.UserId.ToString(),
                            EmailCertTo = baseCrmOrder.NotifyEmailTo,
                            EmailCertCC = baseCrmOrder.NotifyEmailCC,
                            AddressEnteredFormatted = baseCrmOrder.AddressEntered.AddressFormatted,
                            AddressMatchedFormatted = baseCrmOrder.AddressMatched.AddressFormatted,
                            Address1Orig = baseCrmOrder.AddressEntered.Address1,
                            Address2Orig = baseCrmOrder.AddressEntered.Address2,
                            CityOrig = baseCrmOrder.AddressEntered.City,
                            StateOrig = baseCrmOrder.AddressEntered.State,
                            ZipOrig = baseCrmOrder.AddressEntered.Zip,
                            Address1Matched = baseCrmOrder.AddressMatched.Address1,
                            Address2Matched = baseCrmOrder.AddressMatched.Address2,
                            CityMatched = baseCrmOrder.AddressMatched.City,
                            StateMatched = baseCrmOrder.AddressMatched.State,
                            ZipMatched = baseCrmOrder.AddressMatched.Zip,
                            FloodOrderStatus = (FloodOrderDetStatusTypeEnum?)baseCrmOrder.DeterminationStatusId,
                            FloodOrderStatusDate = baseCrmOrder.DeterminationDate,
                            FloodOrderStatusDescription = baseCrmOrder.DeterminationStatusDescription,
                            FloodZone = baseCrmOrder.FloodZone,
                            NoteToAnalyst = baseCrmOrder.NotesToAnalyst,
                            InsertDate = baseCrmOrder.InsertDate,
                            ModifiedDate = baseCrmOrder.ModifiedDate,
                        };
                        data.Order = myOrder;
                    }
                }
            }

            return data;
        }

        public void Customize(IHtmlToPdfOptions options)
        {
            // you may customize HTML to PDF converter (WKHTML) parameters here, e.g. 
            // options.MarginsAll = "2cm";
        }
    }

    public class FloodOrderReportData
    {
        public FloodOrderRow Order { get; set; }
    }
}