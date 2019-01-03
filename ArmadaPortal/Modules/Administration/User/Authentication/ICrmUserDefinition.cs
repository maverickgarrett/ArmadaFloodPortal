namespace ArmadaPortal
{
    public interface ICrmUserDefinition
    {
        string Id
        {
            get;
        }

        string AccountId
        {
            get;
        }

        string AccountName
        {
            get;
        }

        string BranchId
        {
            get;
        }

        string BranchName
        {
            get;
        }

        string CrmContactId
        {
            get;
        }


        string Username
        {
            get;
        }

        int? RoleId
        {
            get;
        }

        string RoleName
        {
            get;
        }

        string FirstName
        {
            get;
        }
        string LastName
        {
            get;
        }

        string DisplayName
        {
            get;
        }

        string Email
        {
            get;
        }

        bool? IsActive
        {
            get;
        }
    }
}