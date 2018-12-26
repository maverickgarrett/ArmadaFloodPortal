
using Serenity.Extensibility;
using System.ComponentModel;

namespace ArmadaPortal.AdministrationClient
{
    [NestedPermissionKeys]
    [DisplayName("AdministrationClient")]
    public class PermissionKeys
    {
        [Description("Client User Management")]
        public const string Security = "AdministrationClient:Security";
    }
}
