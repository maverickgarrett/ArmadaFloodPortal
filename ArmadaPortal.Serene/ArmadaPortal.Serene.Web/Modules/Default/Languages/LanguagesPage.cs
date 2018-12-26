
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Languages"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LanguagesRow))]
    public class LanguagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Languages/LanguagesIndex.cshtml");
        }
    }
}