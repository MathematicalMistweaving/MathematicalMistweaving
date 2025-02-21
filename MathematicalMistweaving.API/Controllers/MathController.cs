using Microsoft.AspNetCore.Mvc;
using Mistweaver.Data.Interfaces;
using Mistweaver.Math.Interfaces;

namespace MathematicalMistweaving.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{verison:apiVersion}/[controller]")]
    [ApiController]
    public class MathController : ControllerBase
    {
        private readonly ISpellBook _spellBook;
        private readonly IMistweaverMath _math;

        public MathController(ISpellBook spellBook, IMistweaverMath math)
        {
            _spellBook = spellBook;
            _math = math;
        }

        [HttpGet]
        public IActionResult Go()
        {
            return Ok();
        }

        [HttpGet("stat")]
        public IActionResult GetStatPercent(string name, int rating) 
        {

            return Ok(_math.GetStatPercent(rating, name));
        }
    }

}