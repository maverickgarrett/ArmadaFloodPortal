using Serenity.Navigation;
using Flood = ArmadaPortal.Flood.Pages;

[assembly: NavigationMenu(1000, "Flood Orders", icon: "fa-anchor")]
[assembly: NavigationLink(1001, "Flood/Orders", typeof(Flood.FloodOrderController), action: "Index", ItemClass = " ", Title = "Flood Orders")]
