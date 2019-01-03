namespace ArmadaPortal
{
    using Serenity;
    using System;

    [Serializable]
    public class CrmUserDefinition : ICrmUserDefinition
    {
        public string Id { get { return UserId.ToString(); } }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string UserImage { get; set; }
        public bool? IsActive { get; set; }
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }
        public string Source { get; set; }
        public DateTime? UpdateDate { get; set; }
        public DateTime? LastDirectoryUpdate { get; set; }

        public string AccountId { get; set; }
        public string AccountName { get; set; }
        public string BranchId { get; set; }
        public string BranchName { get; set; }
        public string CrmContactId { get; set; }
        public int? RoleId { get; set; }
        public string RoleName { get; set; }
    }
}