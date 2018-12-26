using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using ArmadaPortal.Core.Models;
using XrmLibrary.EntityHelpers.Utils;

namespace ArmadaPortal.Core.Repositories
{
    public interface IOrderRepository
    {
        IEnumerable<FloodOrder> GetAllOrdersForAccount(Guid accountId);
        IEnumerable<FloodOrder> GetAllOrdersForAccountWithStatusFilter(Guid accountId, string statusFilter);
        IEnumerable<FloodOrder> GetAllOrdersForAccountSearch(Guid accountId, string fieldName, string searchString, string statusFilter);
        IEnumerable<FloodOrder> GetAllOrdersForAccountWithSort(Guid accountId,string fieldName, bool sortDesc, string statusFilter);
        IEnumerable<AttachmentData> GetAttachmentsForOrderId(Guid orderId);
        AttachmentData GetFloodDeterminationLetterForOrderId(Guid orderId);
        IEnumerable<DownloadLink> GetDocumentListByOrderId(Guid orderId);
        AttachmentData GetAttachmentByAnnotationId(Guid annotationId);
        AttachmentData GetAttachmentByReferenceId(Guid noteId);
        DownloadLink GetDocumentById(Guid documentId);
        FloodOrder GetOrderById(Guid orderId);
        FloodOrder GetOrderByNumber(string orderId);
        FloodOrderDashboard GetFloodOrderDashboard(Guid accountId);
        void SaveChanges();
        Guid SaveCommit(FloodOrder order);
        bool Update(FloodOrder order);
        void Add(FloodOrder order);
        void Delete(FloodOrder order);
    }
}