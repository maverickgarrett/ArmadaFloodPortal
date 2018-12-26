
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/RolePermissions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RolePermissionsRow))]
    public class RolePermissionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/RolePermissions/RolePermissionsIndex.cshtml");
        }
    }
}