using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mistweaver.SpellData;
using Mistweaver.SpellData.Helpers;
using Mistweaver.SpellData.Interfaces;
using System.Runtime.Caching;

namespace MathematicalMistweaving.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{verison:apiVersion}/[controller]")]
    [ApiController]
    public class MathController : ControllerBase
    {
        private readonly ISpellBook spellBook;

        public MathController(ISpellBook spellBook)
        {
            this.spellBook = spellBook;
        }

        [HttpGet("")]
        public ActionResult<HealBase> GetModifiedSpell()
        {
            return NotFound();
        }
    }

}