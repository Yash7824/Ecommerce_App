using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly DataContext _db;

        public BookController(DataContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> getBooks()
        {
            return Ok(await _db.Books.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Book>>> getBook(int id)
        {
            var dbBook = await _db.Books.FindAsync(id);

            if (dbBook == null)
            {
                return BadRequest("Book Not Found");
            }

            return Ok(dbBook);
        }

        [HttpPost]
        public async Task<ActionResult<List<Book>>> addBook(Book book)
        {
            book.Id = 0;
            _db.Books.Add(book);
            await _db.SaveChangesAsync();
            return Ok(await _db.Books.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Book>>> updateBook(Book book)
        {
            var dbBook = await _db.Books.FindAsync(book.Id);

            if (dbBook == null)
            {
                return BadRequest("Book Not Found");
            }

            dbBook.Title = book.Title;
            dbBook.Description = book.Description;
            dbBook.ImageUrl = book.ImageUrl;
            dbBook.Price = book.Price;
            dbBook.rating = book.rating;

            await _db.SaveChangesAsync();
            return Ok(await _db.Books.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Book>>> deleteBook(int id)
        {
            var dbBook = await _db.Books.FindAsync(id);

            if (dbBook == null)
            {
                return BadRequest("Book Not Found");
            }

            _db.Books.Remove(dbBook);
            await _db.SaveChangesAsync();
            return Ok(await _db.Books.ToListAsync());
        }

    }
}
