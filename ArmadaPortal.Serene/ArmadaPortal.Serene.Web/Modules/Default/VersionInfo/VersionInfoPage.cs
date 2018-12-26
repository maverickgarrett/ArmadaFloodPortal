
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/VersionInfo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.VersionInfoRow))]
    public class VersionInfoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/VersionInfo/VersionInfoIndex.cshtml");
        }
    }
}