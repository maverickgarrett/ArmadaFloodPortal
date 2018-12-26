
namespace ArmadaPortal.AdministrationClient.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("AdministrationClient.ClientUser")]
    [BasedOnRow(typeof(Entities.ClientUserRow), CheckNames = false)]
    public class ClientUserColumns
    {
        [EditLink, AlignRight, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(250)]
        public String Email { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        //[Width(150)]
        //public String FirstName { get; set; }
        //[Width(150)]
        //public String LastName { get; set; }
    }
}
