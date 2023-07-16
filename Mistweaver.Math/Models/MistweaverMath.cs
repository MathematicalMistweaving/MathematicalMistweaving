using Mistweaver.Data.Interfaces;
using Mistweaver.Math.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Math.Models
{
    public class MistweaverMath : IMistweaverMath
    {
        private readonly ISpellBook _spellBook;
        private readonly IProfile _profile;
        public MistweaverMath(ISpellBook spellBook, IProfile profile) 
        {
            _spellBook = spellBook;
            _profile = profile;
        }
        public SpellResult GetSpellWithModifiers(string name)
        {
            var spell = _spellBook.Spells.Where(x => x.Name == name).FirstOrDefault();
            //var talent = _profile.Talents
            var result = name + " is valid";
            return new SpellResult() { validResponse = result } ;
        }
    }
}
