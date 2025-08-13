using Microsoft.AspNetCore.Mvc;
using Enterprise.Services;
namespace Enterprise.Controllers {
    public class HomeController : Controller {
        [HttpGet("/")]
        public IActionResult Index() {
            return Content("<h1>Welcome to ASP.NET Core Enterprise Home!</h1>", "text/html");
        }
        [HttpGet("/api/data")]
        public IActionResult Data() {
            return Json(ApiService.GetData());
        }
    }
}
