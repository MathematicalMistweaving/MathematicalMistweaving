using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mistweaver.Math.Interfaces;
using Mistweaver.Math.Models;
using Mistweaver.Data;
using Mistweaver.Data.Helpers;
using Mistweaver.Data.Interfaces;
using System.Runtime.Caching;

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
    }

}