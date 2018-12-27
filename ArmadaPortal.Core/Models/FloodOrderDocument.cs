using AutoMapper.Configuration.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ArmadaPortal.Core.Models
{
    public class FloodOrderDocument
    {
        public Guid? OrderId { get; set; }
        public User OrderedBy { get; set; }
        public virtual IList<DownloadLink> CustomerUploadFiles { get; set; }

        public bool IsNew { get; set; }

        public FloodOrderDocument()
        {

        }

    }


}
