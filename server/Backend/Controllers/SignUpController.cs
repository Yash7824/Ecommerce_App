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
            var obj = await _db.SignUps.FindAsync(signUp.email);

            if(obj != null)
            {
                return BadRequest("User already present");
            }

            if(signUp.email == null)
            {
                return BadRequest("Email should be provided");
            }

            if(signUp.firstName.Length < 3 || signUp.firstName.Length > 10)
            {
                return BadRequest("First Name should be atleast 3 letters and atmost 10 characters");
            }

            if (signUp.lastName.Length < 3 || signUp.lastName.Length > 10)
            {
                return BadRequest("Last Name should be atleast 3 letters and atmost 10 characters");
            }

            if (signUp.userName.Length < 3 || signUp.userName.Length > 10)
            {
                return BadRequest("User Name should be atleast 3 letters and atmost 10 characters");
            }

            if (signUp.password.Length < 3 || signUp.password.Length > 10)
            {
                return BadRequest("Password should be atleast 3 letters and atmost 10 characters");
            }

            if (signUp.gender == null)
            {
                return BadRequest("Gender should be provided");
            }

            if (signUp.age == 0)
            {
                return BadRequest("Age should be greater than 0");
            }

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
