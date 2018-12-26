using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using XrmLibrary.EntityHelpers.Utils;

namespace ArmadaPortal.Core.Models
{
    public class DownloadLink
    {
        public DownloadLink()
        {
            DocumentId = "";
            DocumentType = "";
            Title = "";
            AltText = "";
            DownloadUrl = "";
            FileName = "";
            FileSize = 0;
            InsertDate = null;
            ModifiedDate = null;
            FileContent = new AttachmentData();
        }

        public string DocumentId { get; set; }
        public string DocumentType { get; set; }
        public string Title { get; set; }
        public string AltText { get; set; }
        public string DownloadUrl { get; set; }
        public string FileName { get; set; }
        public int? FileSize { get; set; }
        public DateTime? InsertDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public AttachmentData FileContent { get; set; }
    }


    
}
