using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ✅ Add DbContext for PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// ✅ Allow Angular frontend to call API
builder.Services.AddCors(options =>
{
    options.AddPolicy("DevPolicy", policy =>
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

app.UseCors("DevPolicy");
app.UseHttpsRedirection();

// ✅ API endpoint for question papers
app.MapGet("/api/question-papers", async (AppDbContext db, string? series) =>
{
    var query = db.QuestionPapers.AsQueryable();
    if (!string.IsNullOrEmpty(series))
        query = query.Where(q => q.Series == series);

    return await query.OrderByDescending(q => q.ExamDate).ToListAsync();
});

app.Run();
