using DistributedEStore.Common.RabbitMq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DistributedEStore.Api.Gateway.Controllers
{
    [Route("")]
    public class HomeController : BaseController
    {
        public HomeController(IBusPublisher busPublisher) : base(busPublisher) { }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult Index() => Ok("Distributed-eStore Api-Gateway Home Page");
    }
}
