namespace ArmadaPortal.Administration
{
    using ArmadaPortal.Core.Repositories;
    using ArmadaPortal.Data.Repositories;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Data;
    using MyRow = Entities.UserRow;

    public class CrmUserRetrieveService : ICrmUserRetrieveService
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        private IAccountRepository _accountRepository;
        private IUserRepository _userRepository;

        public CrmUserRetrieveService()
        {
            if (_accountRepository == null)
            {
                _accountRepository = new AccountRepository();
            }

            if (_userRepository == null)
            {
                _userRepository = new UserRepository();
            }
        }



        public CrmUserRetrieveService(IUserRepository userRepository, IAccountRepository accountRepository)
        {
            _accountRepository = new AccountRepository();
            _userRepository = new UserRepository();
        }


        private CrmUserDefinition GetFirstByName(string userName)
        {
            var user = _userRepository.GetUserByName(userName);
            if (user != null && user.IsValid)
                return new CrmUserDefinition
                {
                    UserId = user.UserId.Value,
                    Username = user.UserName,
                    Email = user.EmailAddress,
                    DisplayName = user.FullName,
                    IsActive = user.IsActive,
                    Source = user.Source,
                    PasswordHash = user.PasswordHash,
                    PasswordSalt = user.PasswordSalt,
                    UpdateDate = user.ModifiedDate,
                    LastDirectoryUpdate = user.LastLoginDate
                };

            return null;
        }

        private CrmUserDefinition GetFirstById(string userId)
        {
            //var user = connection.TrySingle<Entities.UserRow>(criteria);

            var user = _userRepository.GetUserById(Guid.Parse(userId));
            if (user != null && user.IsValid)
                return new CrmUserDefinition
                {
                    UserId = user.UserId.Value,
                    Username = user.UserName,
                    Email = user.EmailAddress,
                    DisplayName = user.FullName,
                    IsActive = user.IsActive,
                    Source = user.Source,
                    PasswordHash = user.PasswordHash,
                    PasswordSalt = user.PasswordSalt,
                    UpdateDate = user.ModifiedDate,
                    LastDirectoryUpdate = user.LastLoginDate
                };

            return null;
        }


        public ICrmUserDefinition ById(string id)
        {
            return GetFirstById(id);
        }

        public ICrmUserDefinition ByUsername(string username)
        {
            if (username.IsEmptyOrNull())
                return null;

            return GetFirstByName(username);
        }

        public static void RemoveCachedUser(Guid userId, string username)
        {
            if (userId != null)
                TwoLevelCache.Remove("UserByID_" + userId.ToString());

            if (username != null)
                TwoLevelCache.Remove("UserByName_" + username.ToLowerInvariant());
        }

    }
}