using System;
using System.Collections.Generic;
using System.Linq;

namespace ArmadaPortal.Core.Models
{
    public class OrderAddress
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Country { get; set; }
        public string AddressFormatted { get; set; }
        public double? LocationLat { get; set; }
        public double? LocationLong { get; set; }
    }
}
