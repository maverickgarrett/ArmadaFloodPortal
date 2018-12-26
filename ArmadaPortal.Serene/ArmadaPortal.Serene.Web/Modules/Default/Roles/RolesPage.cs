
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Roles"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RolesRow))]
    public class RolesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Roles/RolesIndex.cshtml");
        }
    }
}