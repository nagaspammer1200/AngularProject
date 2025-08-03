using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<QuestionPaper> QuestionPapers => Set<QuestionPaper>();

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}
