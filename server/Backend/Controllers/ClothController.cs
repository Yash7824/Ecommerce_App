using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClothController : ControllerBase
    {
        private readonly DataContext _db;

        public ClothController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cloth>>> getClothes()
        {
            return Ok(await _db.Cloths.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Cloth>>> getCloth(int id)
        {
            var dbCloth = await _db.Cloths.FindAsync(id);

            if (dbCloth == null)
            {
                return BadRequest("Cloth Not Found");
            }

            return Ok(dbCloth);
        }

        [HttpPost]
        public async Task<ActionResult<List<Cloth>>> addCloth(Cloth cloth)
        {
            cloth.Id = 0;
            _db.Cloths.Add(cloth);
            await _db.SaveChangesAsync();
            return Ok(await _db.Cloths.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Cloth>>> updateCloth(Cloth cloth)
        {
            var dbCloth = await _db.Cloths.FindAsync(cloth.Id);

            if (dbCloth == null)
            {
                return BadRequest("Cloth Not Found");
            }

            dbCloth.Title = cloth.Title;
            dbCloth.Description = cloth.Description;
            dbCloth.ImageUrl = cloth.ImageUrl;
            dbCloth.Price = cloth.Price;
            dbCloth.rating = cloth.rating;

            await _db.SaveChangesAsync();
            return Ok(await _db.Cloths.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Cloth>>> deleteCloth(int id)
        {
            var dbCloth = await _db.Cloths.FindAsync(id);

            if (dbCloth == null)
            {
                return BadRequest("Cloth Not Found");
            }

            _db.Cloths.Remove(dbCloth);
            await _db.SaveChangesAsync();
            return Ok(await _db.Cloths.ToListAsync());
        }

    }
}
