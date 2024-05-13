namespace Movies;

public class Movie
{
    private string? _category;
    public string Title { get; set;}
    public string Category
    {
      get
      {
        return "Categoria: " + _category;
      }

      set
      {
        if (value != "Fantasia" && value != "Sci-fi")
          throw new Exception("Categoria inválida!");
        _category = value;
      }
    }

    public Movie(string Title, string Category)
    {
      this.Title = Title;
      this.Category = Category;
    }
}