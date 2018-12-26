namespace ArmadaPortal.AdministrationClient.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("AdministrationClient.ClientUser")]
    [BasedOnRow(typeof(Entities.ClientUserRow), CheckNames = false)]
    public class ClientUserForm
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        //public String FirstName { get; set; }
        //public String LastName { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public string Source { get; set; }
    }
}