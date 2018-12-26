using Serenity.Navigation;
using AdministrationClient = ArmadaPortal.AdministrationClient.Pages;

[assembly: NavigationMenu(12000, "AdministrationClient", icon: "fa-desktop")]
[assembly: NavigationLink(12000, "AdministrationClient/User Management", typeof(AdministrationClient.UserController), icon: "fa-users")]