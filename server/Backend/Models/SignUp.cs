using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class SignUp
    {
        [Key]
        public string email { get; set; } = string.Empty;

        public string firstName { get; set; } = string.Empty;
        public string lastName { get; set; } = string.Empty;
        public string userName { get; set; } = string.Empty;
        
        public string password { get; set; } = string.Empty;
        public string gender { get; set; } = string.Empty;
        public int age { get; set; } = 0;
        public DateTime dob { get; set; } = new DateTime();

        
    }
}
