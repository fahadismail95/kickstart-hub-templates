using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.MapGet("/", () => "Welcome to ASP.NET Core Enterprise!");
app.MapGet("/api/data", () => new { message = "Enterprise API Data" });
app.Run();
