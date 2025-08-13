using Microsoft.AspNetCore.Mvc;
namespace Standard.Controllers {
    public class HomeController : Controller {
        [HttpGet("/")]
        public IActionResult Index() {
            return Content("<h1>Welcome to ASP.NET Core Standard Home!</h1>", "text/html");
        }
    }
}
