using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;
using Mistweaver.Math.Interfaces;
using Mistweaver.Math.Models;
using Mistweaver.SpellData;
using Mistweaver.SpellData.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<ISpellBook>(new SpellBook());
builder.Services.AddSingleton<IMistweaverMath>(new MistweaverMath());
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
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
