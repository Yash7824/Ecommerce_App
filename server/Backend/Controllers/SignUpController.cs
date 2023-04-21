using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private readonly DataContext _db;
        public SignUpController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<SignUp>>> getUsers()
        {
            return Ok(await _db.SignUps.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<SignUp>>> addUser(SignUp signUp)
        {
            _db.SignUps.Add(signUp);
            _db.SaveChanges();
            return Ok(await _db.SignUps.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<SignUp>>> updateUser(SignUp signUp)
        {
            var dbSignUp = await _db.SignUps.FindAsync(signUp.email);

            if (dbSignUp == null) {
                return BadRequest("User not present");
            }

            dbSignUp.email = signUp.email;
            dbSignUp.firstName = signUp.firstName;
            dbSignUp.lastName = signUp.lastName;
            dbSignUp.userName = signUp.userName;
            dbSignUp.password = signUp.password;
            dbSignUp.gender = signUp.gender;
            dbSignUp.age = signUp.age;
            dbSignUp.dob = signUp.dob;

            await _db.SaveChangesAsync();
            return Ok(await _db.SignUps.ToListAsync());

        }

        [HttpDelete("{email}")]
        public async Task<ActionResult<List<SignUp>>> deleteUser(string email)
        {
            var dbSignUp = await _db.SignUps.FindAsync(email);

            if (dbSignUp == null)
            {
                return BadRequest("User not present");
            }

            _db.SignUps.Remove(dbSignUp);
            await _db.SaveChangesAsync();
            return Ok(await _db.SignUps.ToListAsync());

        }
    }
}
