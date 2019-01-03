namespace ArmadaPortal
{
    using Administration;
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data;
    using ArmadaPortal.Data.Repositories;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Configuration;

    public static partial class SiteInitialization
    {
        public static void ApplicationStart()
        {
            try
            {
                SqlSettings.AutoQuotedIdentifiers = true;
                Serenity.Web.CommonInitialization.Run();

                var registrar = Dependency.Resolve<IDependencyRegistrar>();
                //registrar.RegisterInstance<IAuthorizationService>(new Administration.AuthorizationService());
                //registrar.RegisterInstance<IAuthenticationService>(new Administration.AuthenticationService());
                //registrar.RegisterInstance<IPermissionService>(new LogicOperatorPermissionService(new Administration.PermissionService()));
                registrar.RegisterInstance<IUserRetrieveService>(new Administration.UserRetrieveService());

                registrar.RegisterInstance<IAuthorizationService>(new Administration.AuthorizationService());
                registrar.RegisterInstance<IAuthenticationService>(new Administration.CrmAuthenticationService());
                registrar.RegisterInstance<IPermissionService>(new LogicOperatorPermissionService(new Administration.PermissionService()));
                registrar.RegisterInstance<ICrmUserRetrieveService>(new Administration.CrmUserRetrieveService());
                //registrar.RegisterInstance<ICrmUserRetrieveService>(new Administration.CrmUserRetrieveService());



                registrar.RegisterInstance<IOrderRepository>(new OrderRepository(new CrmContext()));
                registrar.RegisterInstance<IAccountRepository>(new AccountRepository(new CrmContext()));
                registrar.RegisterInstance<IUserRepository>(new UserRepository());

                if (!ConfigurationManager.AppSettings["LDAP"].IsTrimmedEmpty())
                    registrar.RegisterInstance<IDirectoryService>(new LdapDirectoryService());

                if (!ConfigurationManager.AppSettings["ActiveDirectory"].IsTrimmedEmpty())
                    registrar.RegisterInstance<IDirectoryService>(new ActiveDirectoryService());

                InitializeExceptionLog();
            }
            catch (Exception ex)
            {
                ex.Log();
                throw;
            }

            foreach (var databaseKey in databaseKeys)
            {
                //EnsureDatabase(databaseKey);
                //RunMigrations(databaseKey);
            }

        }

        public static void ApplicationEnd()
        {
        }
    }
}