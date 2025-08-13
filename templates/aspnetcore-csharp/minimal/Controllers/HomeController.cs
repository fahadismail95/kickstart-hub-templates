using Microsoft.AspNetCore.Mvc;
namespace Minimal.Controllers {
    public class HomeController : Controller {
        [HttpGet("/")]
        public IActionResult Index() {
            return Content("<h1>Hello World from ASP.NET Core Minimal!</h1>", "text/html");
        }
    }
}
