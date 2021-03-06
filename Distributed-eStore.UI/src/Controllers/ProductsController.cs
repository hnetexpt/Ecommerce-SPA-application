using DistributedEStore.Api.Services;
using Microsoft.AspNetCore.Mvc;
using DistributedEStore.Common.Queries;
using System.Threading.Tasks;
using System;

namespace DistributedEStore.UI.Controllers
{
    [ApiController]
    public class ProductsController : BaseController
    {
        private readonly IApiGatewayService apiGatewayService;

        public ProductsController(IApiGatewayService apiGatewayService)
        {
            this.apiGatewayService = apiGatewayService;
        }
        
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] BrowseProducts query)
            => Collection(await apiGatewayService.BrowseAsync(query));

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
            => Single(await apiGatewayService.GetProductById(id));
    }
}