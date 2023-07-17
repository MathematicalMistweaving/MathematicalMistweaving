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


        /**type TMod is our Talent type 
             * from here we need to extract the talent rank data 
             * and the property that is modified
             * then compute the change in property
             * and set the value on the spell (type TBase)
             */
        public void ModifyHealProperties<TBase, TMod>() where TMod: TalentBase where TBase : HealBase
        {
            throw new NotImplementedException();
        }

        public void ModifyDamageProperties<TBase, TMod>() where TMod : TalentBase where TBase : DamageBase
        {
            throw new NotImplementedException();
        }

        public void ModifyProperties<TBase, TMod>() where TMod : TalentBase
        {
            if (typeof(TBase) == typeof(HealBase))
                ModifyHealProperties<HealBase, TalentBase>();

            if (typeof(TBase) == typeof(DamageBase))
                ModifyDamageProperties<DamageBase, TalentBase>();
        }
    }
}
