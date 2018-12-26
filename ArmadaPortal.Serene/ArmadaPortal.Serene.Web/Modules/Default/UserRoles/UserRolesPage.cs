
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/UserRoles"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserRolesRow))]
    public class UserRolesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/UserRoles/UserRolesIndex.cshtml");
        }
    }
}