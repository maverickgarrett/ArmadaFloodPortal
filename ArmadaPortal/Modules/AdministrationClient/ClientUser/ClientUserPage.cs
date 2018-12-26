
namespace ArmadaPortal.AdministrationClient.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("AdministrationClient/User"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ClientUserRow))]
    public class UserController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.AdministrationClient.ClientUser.ClientUserIndex);
        }
    }
}