using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace ArmadaPortal.Core.Models
{
    public class User
    {
        public Guid? UserId { get; set; }

        [Required]
        public string UserName { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string EmailAddress { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Initials { get; set; }
        public string JobTitle { get; set; }
        [Required]
        public bool IsActive { get; set; }

        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }

        public bool? IsLockedOut { get; set; }
        public DateTime? LockOutEndDate { get; set; }

        public Guid? AccountId { get; set; }
        public string AccountName { get; set; }
        public Guid? BranchId { get; set; }
        public string BranchName { get; set; }

        public int RoleId { get; set; }
        public string RoleName { get; set; }

        public string Source { get; set; }

        [IgnoreDataMember]
        public virtual IList<Branch> BranchAccounts { get; set; }
    }
}
