using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mistweaver.SpellData;
using Mistweaver.SpellData.Helpers;
using Mistweaver.SpellData.SpellModels;
using System.Runtime.Caching;

namespace MathematicalMistweaving.API.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class SpellDataController : ControllerBase
    {
        private readonly SpellBook _spellBook;
        
        public SpellDataController()
        {
            CacheHelper cache = new CacheHelper();
            _spellBook = cache.GetSpellBook();
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
            var spells = _spellBook.HealingSpells.Where(s => s.Name!.ToLower().Contains(name.ToLower())).ToList();
            return (spells == null) ? NotFound() : Ok(spells);
        }

        [HttpGet("damage")]
        public ActionResult<List<DamageBase>> GetDamageSpells()
        {
            return Ok(_spellBook.DamageSpells);
        }

        [HttpGet("damage/{name}")]
        public ActionResult<DamageBase> GetDamageSpell(string name)
        {
            var spells = _spellBook.DamageSpells.Where(s => s.Name!.ToLower().Contains(name.ToLower())).ToList();
            return (spells == null) ? NotFound() : Ok(spells);
        }

        [HttpGet("{name}")]
        public  ActionResult<SpellBook> GetSpell(string name)
        {
            var spells = _spellBook.Spells.Where(s => s.Name!.ToLower().Contains(name.ToLower())).ToList();
            return (spells == null) ? NotFound() : Ok(spells);
        }

    }
}
