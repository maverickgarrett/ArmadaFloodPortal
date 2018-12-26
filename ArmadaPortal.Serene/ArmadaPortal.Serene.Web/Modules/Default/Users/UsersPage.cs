
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Users"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.UsersRow))]
    public class UsersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Users/UsersIndex.cshtml");
        }
    }
}