namespace Backend.Models
{
    public class Cloth
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string Price { get; set; } = string.Empty;
        public string rating { get; set; } = string.Empty;
    }
}
