using System;
using System.Collections.Generic;
using System.Linq;
using ArmadaPortal.Data;
using ArmadaPortal.Core;
using ArmadaPortal.Core.Models;
using ArmadaPortal.Core.Repositories;
using ArmadaPortal.Core.Extensions;

namespace ArmadaPortal.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        public User GetUserById(Guid userId)
        {
            var user = new User();
            user.IsValid = false;
            var branches = new List<Branch>();

            using (var context = new CrmContext())
            {
                var crmContactQuery = context.XrmServiceContext.ContactSet.Where(x => x.ContactId == userId && x.ContactStatusCode.Value == ContactStatus.Active).FirstOrDefault();

                if (crmContactQuery != null && !string.IsNullOrEmpty(crmContactQuery.Id.ToString()))
                {
                    user.UserId = crmContactQuery.Id;
                    user.UserName = crmContactQuery.UserName;
                    user.FirstName = crmContactQuery.FirstName;
                    user.LastName = crmContactQuery.LastName;
                    //user.BranchId = crmContactQuery.ContactBranchPrimaryContact
                    user.EmailAddress = crmContactQuery.EMailAddress1;
                    user.AccountId = crmContactQuery.ParentCustomerId == null ? Guid.Empty : crmContactQuery.ParentCustomerId.Id;
                    user.AccountName = crmContactQuery.ParentCustomerId == null ? string.Empty : crmContactQuery.ParentCustomerId.Name;
                    user.IsLockedOut = crmContactQuery.LockoutEnabled;
                    user.LockOutEndDate = crmContactQuery.LockoutEndDate;
                    user.PasswordHash = crmContactQuery.PasswordHash;
                    user.PasswordSalt = "";
                    user.LastLoginDate = crmContactQuery.LastSuccessfulLogin;
                    user.ModifiedDate = crmContactQuery.ModifiedOn;
                    user.Source = "crm";
                    user.BranchAccounts = branches;
                    user.IsActive = true;
                    user.IsValid = true;
                }
            }
            return user;
        }

        public User GetUserByName(string userName)
        {
            var user = new User();
            user.IsValid = false;
            var branches = new List<Branch>();

            using (var context = new CrmContext())
            {
                var crmContactQuery = context.XrmServiceContext.ContactSet.Where(x => x.UserName == userName && x.ContactStatusCode.Value == ContactStatus.Active).SingleOrDefault();

                if (crmContactQuery != null && !string.IsNullOrEmpty(crmContactQuery.Id.ToString()))
                {
                    user.UserId = crmContactQuery.Id;
                    user.UserName = crmContactQuery.UserName;
                    user.FirstName = crmContactQuery.FirstName;
                    user.LastName = crmContactQuery.LastName;
                    //user.BranchId = crmContactQuery.ContactBranchPrimaryContact
                    user.EmailAddress = crmContactQuery.EMailAddress1;
                    user.AccountId = crmContactQuery.ParentCustomerId == null ? Guid.Empty : crmContactQuery.ParentCustomerId.Id;
                    user.AccountName = crmContactQuery.ParentCustomerId == null ? string.Empty : crmContactQuery.ParentCustomerId.Name;
                    user.IsLockedOut = crmContactQuery.LockoutEnabled;
                    user.LockOutEndDate = crmContactQuery.LockoutEndDate;
                    user.PasswordHash = crmContactQuery.PasswordHash;
                    user.PasswordSalt = "";
                    user.LastLoginDate = crmContactQuery.LastSuccessfulLogin;
                    user.ModifiedDate = crmContactQuery.ModifiedOn;
                    user.Source = "crm";
                    user.BranchAccounts = branches;
                    user.IsActive = true;
                    user.IsValid = true;
                }
            }
            return user;
        }
    }
}