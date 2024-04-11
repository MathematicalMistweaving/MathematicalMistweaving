using Microsoft.AspNetCore.Mvc;
using Mistweaver.Data;
using Mistweaver.Data.Helpers;
using Mistweaver.Data.Interfaces;

namespace MathematicalMistweaving.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class SpellDataController : ControllerBase
    {
        private readonly ISpellBook _spellBook;

        public SpellDataController(ISpellBook spellBook)
        {
            _spellBook = spellBook;
        }

        [HttpGet("")]
        public ActionResult<List<SpellBase>> GetSpellBook()
        {
            return Ok(_spellBook.Spells);
        }

        [HttpGet("healing")]
        public ActionResult<List<HealBase>> GetHealingSpells()
        {
            return  Ok(_spellBook.HealingSpells);
        }

        [HttpGet("healing/{name}")]
        public ActionResult<HealBase> GetHealingSpell(string name)
        {
            var spells = _spellBook.HealingSpells.Where(s => StringHelper.Like(s.Name, name)).ToList();
            return (spells == null) ? NotFound() : Ok(spells);
        }

        [HttpGet("hots")]
        public ActionResult<List<HealBase>> GetHotInfo()
        {
            return Ok(_spellBook.Hots);
        }

        [HttpGet("damage")]
        public ActionResult<List<DamageBase>> GetDamageSpells()
        {
            return Ok(_spellBook.DamageSpells);
        }

        [HttpGet("damage/{name}")]
        public ActionResult<DamageBase> GetDamageSpell(string name)
        {
            var spells = _spellBook.DamageSpells.Where(s => StringHelper.Like(s.Name, name)).ToList();
            return (spells == null) ? NotFound() : Ok(spells);
        }

        [HttpGet("dots")]
        public ActionResult<List<HealBase>> GetDotInfo()
        {
            return Ok(_spellBook.Dots);
        }

        [HttpGet("{name}")]
        public  ActionResult<SpellBook> GetSpell(string name)
        {
            var spells = _spellBook.Spells.Where(s => StringHelper.Like(s.Name, name)).ToList();
            return (spells == null) ? NotFound() : Ok(spells);
        }

    }
}
