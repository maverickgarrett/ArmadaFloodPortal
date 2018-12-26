
using Serenity.Extensibility;
using System.ComponentModel;

namespace ArmadaPortal.Flood
{
    [NestedPermissionKeys]
    [DisplayName("FloodOrders")]
    public class PermissionKeys
    {
        [Description("[Flood Orders]")]
        public const string General = "ArmadaFlood:General";
        public const string Add = "ArmadaFlood:Add";
        public const string Modify = "ArmadaFlood:Modify";
        public const string Read = "ArmadaFlood:Read";
        public const string Print = "ArmadaFlood:Print";
    }
}
