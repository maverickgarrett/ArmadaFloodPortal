
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/UserPreferences"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UserPreferencesRow))]
    public class UserPreferencesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/UserPreferences/UserPreferencesIndex.cshtml");
        }
    }
}