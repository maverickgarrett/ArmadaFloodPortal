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
            //var user = connection.TrySingle<Entities.UserRow>(criteria);

            var user = _userRepository.GetUserByName(userName);
            if (user != null)
                return new CrmUserDefinition
                {
                    UserId = user.UserId.Value,
                    Username = user.UserName,
                    Email = user.EmailAddress,
                    DisplayName = user.FullName,
                    IsActive = user.IsActive,
                    Source = user.Source,
                    PasswordHash = user.pas,
                    PasswordSalt = user.PasswordSalt,
                    UpdateDate = user.UpdateDate,
                    LastDirectoryUpdate = user.LastDirectoryUpdate
                };

            return null;
        }

        public ICrmUserDefinition ById(string id)
        {
            return TwoLevelCache.Get<CrmUserDefinition>("UserByID_" + id, TimeSpan.Zero, TimeSpan.FromDays(1), fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                    return GetFirst(connection, new Criteria(fld.UserId) == Int32.Parse(id));
            });
        }

        public ICrmUserDefinition ByUsername(string username)
        {
            if (username.IsEmptyOrNull())
                return null;

            return TwoLevelCache.Get<UserDefinition>("UserByName_" + username.ToLowerInvariant(), 
                TimeSpan.Zero, TimeSpan.FromDays(1), fld.GenerationKey, () =>
            {
                using (var connection = SqlConnections.NewByKey("Default"))
                    return GetFirst(connection, new Criteria(fld.Username) == username);
            });
        }

        public static void RemoveCachedUser(int? userId, string username)
        {
            if (userId != null)
                TwoLevelCache.Remove("UserByID_" + userId);

            if (username != null)
                TwoLevelCache.Remove("UserByName_" + username.ToLowerInvariant());
        }
    }
}