using DistributedEStore.Common.Dispatchers;
using DistributedEStore.Common.Types;
using DistributedEStore.Services.Product.Queries;
using DistributedEStore.Common.Mvc;
using DistributedEStore.Services.Products.Dto;
using DistributedEStore.Services.Products.Queries;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DistributedEStore.Services.Product.Controllers
{
    public class ProductsController : BaseController
    {
        public ProductsController(IDispatcher dispatcher) : base(dispatcher) { }

        [HttpGet]
        public async Task<PagedResult<ProductDto>> Get([FromQuery] BrowseProducts query)
        {
            return await QueryAsync(query);
        }

        [HttpGet("{id}")]
        public async Task<ProductDto> GetAsync([FromRoute] GetProduct query)
            => await QueryAsync(query);
    }
}