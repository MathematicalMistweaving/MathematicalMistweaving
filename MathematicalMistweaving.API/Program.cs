using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;
using Mistweaver.Data;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Profile;
using Mistweaver.Math.Interfaces;
using Mistweaver.Math.Models;

var builder = WebApplication.CreateBuilder(args);
var allowedOrigins = "_myAllowedOrigins";
var allowedOriginsDEV = "_devOrigins";
// Add services to the container.
builder.Services.AddSingleton<ISpellBook, SpellBook>();
builder.Services.AddSingleton<IProfile, PlayerProfile>();
builder.Services.AddSingleton<IMistweaverMath, MistweaverMath>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOriginsDEV,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000");
        });
    options.AddPolicy(name: allowedOrigins,
        policy =>
        {
            policy.WithOrigins("");
        });
});
builder.Services.AddControllers();
builder.Services.AddApiVersioning(delegate (ApiVersioningOptions options)
{
    options.ReportApiVersions = true;
    options.UseApiBehavior = true;
});
builder.Services.AddVersionedApiExplorer(delegate (ApiExplorerOptions options)
{
    options.GroupNameFormat = "'v'VVV";
    options.SubstituteApiVersionInUrl = true;
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(allowedOriginsDEV);
}
app.UseCors(allowedOrigins);
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
