using Serenity.Navigation;
using Flood = ArmadaPortal.Flood.Pages;

[assembly: NavigationMenu(7000, "Flood Orders", icon: "fa-anchor")]
[assembly: NavigationLink(int.MaxValue, "Flood/Orders", typeof(Flood.FloodOrderController), action: "Index")]
