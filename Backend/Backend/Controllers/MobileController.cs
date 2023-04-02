using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MobileController : ControllerBase
    {
        private readonly DataContext _db;

        public MobileController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Mobile>>> getMobiles()
        {
            return Ok(await _db.Mobiles.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Mobile>>> getMobile(int id)
        {
            var dbMobile = await _db.Mobiles.FindAsync(id);

            if (dbMobile == null)
            {
                return BadRequest("Mobile Not Found");
            }

            return Ok(dbMobile);
        }

        [HttpPost]
        public async Task<ActionResult<List<Mobile>>> addMobile(Mobile mobile)
        {
            mobile.Id = 0;
            _db.Mobiles.Add(mobile);
            await _db.SaveChangesAsync();
            return Ok(await _db.Mobiles.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Mobile>>> updateMobile(Mobile mobile)
        {
            var dbMobile = await _db.Laptops.FindAsync(mobile.Id);

            if (dbMobile == null)
            {
                return BadRequest("Laptop Not Found");
            }

            dbMobile.Title = mobile.Title;
            dbMobile.Description = mobile.Description;
            dbMobile.ImageUrl = mobile.ImageUrl;
            dbMobile.Price = mobile.Price;
            dbMobile.rating = mobile.rating;

            await _db.SaveChangesAsync();
            return Ok(await _db.Mobiles.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Mobile>>> deleteMobile(int id)
        {
            var dbMobile = await _db.Mobiles.FindAsync(id);

            if (dbMobile == null)
            {
                return BadRequest("Mobile Not Found");
            }

            _db.Mobiles.Remove(dbMobile);
            await _db.SaveChangesAsync();
            return Ok(await _db.Mobiles.ToListAsync());
        }
    }
}
