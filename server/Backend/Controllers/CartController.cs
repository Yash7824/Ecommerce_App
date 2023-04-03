using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly DataContext _db;

        public CartController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cart>>> getCarts()
        {
            return Ok(await _db.Carts.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Cart>>> getCart(int id)
        {
            var dbProduct = await _db.Carts.FindAsync(id);

            if(dbProduct == null)
            {
                return BadRequest("Product Not Found");
            }

            return Ok(dbProduct);
        }

        [HttpPost]
        public async Task<ActionResult<List<Cart>>> addCart(Cart product)
        {
            product.Id = 0;
            _db.Carts.Add(product);
            await _db.SaveChangesAsync();

            return Ok(await _db.Carts.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Cart>>> updateCart(Cart product)
        {
            var dbProduct = await _db.Carts.FirstOrDefaultAsync(x => x.Id == product.Id);
            if (dbProduct == null)
            {
                return BadRequest("Product not Found");
            }

            dbProduct.Title = product.Title;
            dbProduct.Description = product.Description;
            dbProduct.ImageUrl = product.ImageUrl;
            dbProduct.Price = product.Price;
            dbProduct.rating = product.rating;

            await _db.SaveChangesAsync();
            return Ok(await _db.Carts.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Cart>>> deleteCart(int id)
        {
            var dbProduct = await _db.Carts.FindAsync(id);
            if (dbProduct == null)
            {
                return BadRequest("Product not Found");
            }

            _db.Carts.Remove(dbProduct);
            await _db.SaveChangesAsync();
            return Ok(await _db.Carts.ToListAsync());
        }
    }
}
