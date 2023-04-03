using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LaptopController : ControllerBase
    {
        private readonly DataContext _db;

        public LaptopController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Laptop>>> getLaptops()
        {
            return Ok(await _db.Laptops.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Laptop>>> getLaptop(int id)
        {
            var dbLaptop = await _db.Laptops.FindAsync(id);

            if(dbLaptop == null)
            {
                return BadRequest("Laptop Not Found");
            }

            return Ok(dbLaptop);
        }

        [HttpPost]
        public async Task<ActionResult<List<Laptop>>> addLaptop(Laptop laptop)
        {
            _db.Laptops.Add(laptop);
            await _db.SaveChangesAsync();
            return Ok(await _db.Laptops.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Laptop>>> updateLaptop(Laptop laptop)
        {
            var dbLaptop = await _db.Laptops.FindAsync(laptop.Id);

            if(dbLaptop == null)
            {
                return BadRequest("Laptop Not Found");
            }

            dbLaptop.Title = laptop.Title;
            dbLaptop.Description = laptop.Description;
            dbLaptop.ImageUrl= laptop.ImageUrl;
            dbLaptop.Price= laptop.Price;
            dbLaptop.rating = laptop.rating;

            await _db.SaveChangesAsync();
            return Ok(await _db.Laptops.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Laptop>>> deleteLaptop(int id)
        {
            var dbLaptop = await _db.Laptops.FindAsync(id);

            if (dbLaptop == null)
            {
                return BadRequest("Laptop Not Found");
            }

            _db.Laptops.Remove(dbLaptop);
            await _db.SaveChangesAsync();
            return Ok(await _db.Laptops.ToListAsync());
        }
    }
}
