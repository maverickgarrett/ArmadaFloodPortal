using Serenity.Navigation;
using MyPages = ArmadaPortal.Serene.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Exceptions", typeof(MyPages.ExceptionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Languages", typeof(MyPages.LanguagesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Role Permissions", typeof(MyPages.RolePermissionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Roles", typeof(MyPages.RolesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/User Permissions", typeof(MyPages.UserPermissionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/User Preferences", typeof(MyPages.UserPreferencesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/User Roles", typeof(MyPages.UserRolesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Users", typeof(MyPages.UsersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Version Info", typeof(MyPages.VersionInfoController), icon: null)]