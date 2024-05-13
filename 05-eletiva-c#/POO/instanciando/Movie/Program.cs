namespace Movies;

public class MoviePrincipal
{
    public static void Main(string[] args)
    {
      try
      {
        Movie movieA = new Movie("Matrix", "Sci-fi");
        Movie movieB = new Movie("Senhor dos aneis", "Fantasia");
        
        movieB.Title = "Senhor dos pastéis";
        movieA.Category = "Fantasy";
        Console.WriteLine(movieA.Title);
        Console.WriteLine(movieA.Category);
      }
      catch(Exception ex)
      {
        Console.WriteLine("Erro: " + ex.Message);
      }
    }
}

