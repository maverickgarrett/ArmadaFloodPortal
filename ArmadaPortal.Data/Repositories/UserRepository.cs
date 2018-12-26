using System;
using System.Collections.Generic;
using System.Linq;
using ArmadaPortal.Data;
using ArmadaPortal.Core;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core.Repositories;

namespace ArmadaPortal.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly CrmContext _crmContext;

        public UserRepository()
        {
            if (_crmContext == null)
            {
                _crmContext = new CrmContext();
            }
        }
        public UserRepository(CrmContext crmContext)
        {
            _crmContext = crmContext;
        }

        public User GetUserById(Guid userId)
        {
            var crmContactQuery = _crmContext.XrmServiceContext.ContactSet.Where(x => x.ContactId == userId).FirstOrDefault();
            var user = new User();
            var branches = new List<Branch>();

            if (crmContactQuery !=null)
            {
                user.UserId = crmContactQuery.Id;
                user.UserName = crmContactQuery.FullName;
                user.EmailAddress = crmContactQuery.EMailAddress1;
                user.AccountId = crmContactQuery.AccountId.Id;
                user.BranchAccounts = branches;
            }
            return user;
        }

        public User GetUserByName(string userName)
        {
            var crmContactQuery = _crmContext.XrmServiceContext.ContactSet.Where(x => x.UserName == userName).SingleOrDefault();
            var user = new User();
            var branches = new List<Branch>();

            if (crmContactQuery != null)
            {
                user.UserId = crmContactQuery.Id;
                user.UserName = crmContactQuery.FullName;
                user.EmailAddress = crmContactQuery.EMailAddress1;
                user.AccountId = crmContactQuery.AccountId.Id;
                user.BranchAccounts = branches;
            }
            return user;
        }
    }
}