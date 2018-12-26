
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/UserPermissions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserPermissionsRow))]
    public class UserPermissionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/UserPermissions/UserPermissionsIndex.cshtml");
        }
    }
}