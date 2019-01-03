namespace ArmadaPortal.Administration
{
    using Entities;
    using Repositories;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Web.Helpers;

    public class CrmAuthenticationService : IAuthenticationService
    {
        public bool Validate(ref string username, string password)
        {
            if (username.IsTrimmedEmpty() || string.IsNullOrEmpty(password))
                return false;

            username = username.TrimToEmpty();

            var user = Dependency.Resolve<ICrmUserRetrieveService>().ByUsername(username) as CrmUserDefinition;

            if (user != null)
                return ValidateExistingUser(ref username, password, user);

            return false;
        }

        private bool ValidateExistingUser(ref string username, string password, CrmUserDefinition user)
        {
            username = user.Username;

            if (user.IsActive.HasValue && !user.IsActive.Value)
            {
                if (Log.IsInfoEnabled)
                    Log.Error(String.Format("Inactive user login attempt: {0}", username), this.GetType());

                return false;
            }

            // prevent more than 50 invalid login attempts in 30 minutes
            var throttler = new Throttler("ValidateUser:" + username.ToLowerInvariant(), TimeSpan.FromMinutes(30), 50);
            if (!throttler.Check())
                return false;


            var newpassword = Crypto.HashPassword(password);

            Func<bool> validatePassword = () => Crypto.HashPassword(password)
                .Equals(user.PasswordHash, StringComparison.OrdinalIgnoreCase);

            if (validatePassword())
            {
                throttler.Reset();
                return true;
            }

            return false;

        }

    }
}