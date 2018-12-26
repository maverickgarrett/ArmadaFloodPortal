
namespace ArmadaPortal.Flood.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Flood/Document"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DocumentRow))]
    public class DocumentController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Flood.Document.DocumentIndex);
        }
    }
}
