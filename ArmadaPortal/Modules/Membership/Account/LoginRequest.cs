
namespace ArmadaPortal.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow),CheckNames =false)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("UserName")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("password"), Required(true)]
        public string Password { get; set; }
    }
}