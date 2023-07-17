using Mistweaver.Data.Helpers;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Profile;
using Mistweaver.Data.Talents;
using Mistweaver.Data.Talents.Base;
using Mistweaver.Math.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
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

        public void ApplyPlayerTalents()
        {
            if (_profile.PlayerTalents.Talents.Count > 0)
            {
                foreach (TalentBase talent in _profile.PlayerTalents.Talents)
                {
                    foreach (var affectedSpell in talent.AffectedHeals)
                    {
                        ModifyHealProperties(affectedSpell, talent);
                    }
                    foreach (var affectedSpell in talent.AffectedDamages)
                    {
                        ModifyDamageProperties(affectedSpell, talent);
                    }
                }
            }
        }

        public SpellResult GetSpellWithModifiers(string name)
        {
            var spell = _spellBook.Spells.Where(x => x.Name == name).FirstOrDefault();
            //var talent = _profile.Talents
            var result = name + " is valid";
            return new SpellResult() { validResponse = result } ;
        }

        public T? CalculateModifiedCoefficient<T>(T spell, PlayerTalents talents)
        {
            // redo
            return default(T);
        }

        public virtual decimal CalculateUniqueEffect<T>()
        {
            throw new NotImplementedException();
        }
        public void ModifyHealProperties(HealBase spell, TalentBase talent)
        {
            throw new NotImplementedException();
        }

        public void ModifyDamageProperties(DamageBase spell, TalentBase talent)
        {
            throw new NotImplementedException();
        }
    }
}
