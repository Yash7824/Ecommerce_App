using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Laptop> Laptops => Set<Laptop>();
        public DbSet<Mobile> Mobiles => Set<Mobile>();
        public DbSet<Book> Books => Set<Book>();
        public DbSet<Cloth> Cloths => Set<Cloth>();
        public DbSet<Cart> Carts => Set<Cart>();

        public DbSet<SignUp> SignUps => Set<SignUp>(); 
    }
}
