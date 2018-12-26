
namespace ArmadaPortal.Serene.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Exceptions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExceptionsRow))]
    public class ExceptionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Exceptions/ExceptionsIndex.cshtml");
        }
    }
}