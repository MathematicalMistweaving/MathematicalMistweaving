using Mistweaver.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents.Base
{
    public abstract class TalentBase
    {
        private readonly ISpellBook _spellBook;
        private readonly IProfile _profilfe;
        public TalentBase(ISpellBook spellBook, IProfile profile) {
            _spellBook = spellBook;
            _profilfe = profile;
        }
        public string? Name { get; set; }
        public TalentTier Tier { get; set; }
        public List<string> AffectedSpells { get; set; } = new List<string>();
        public int MaxRank { get; set; }
        public List<TalentRankData>? Ranks { get; set; }
        public bool HasUniqueEffect { get; set; } = false;
        public abstract decimal CalculateUniqueEffect<T>();

        public abstract decimal CalculateHps<T>(ISpellBook spellBook, IProfile profile) where T : HealBase;
        public virtual void ModifyProperties<TBase, TMod>(TBase spell) 
        {
            //Todo: actual implement 
            PropertyInfo spellProp =  typeof(TBase).GetProperties().Where(x => x.Name == "Coefficient").First();
            /**type TMod is our Talent type 
             * from here we need to extract the talent rank data 
             * and the property that is modified
             * then compute the change in property
             * and set the value on the spell (type TBase)
             */
            object talentValue;
            PropertyInfo talentProp = typeof(TMod).GetProperty(spellProp.Name);
            if(talentProp != null)
            {
                //test valid
                talentValue = 141.0m * 1.2m;
            }
            else
            {
                talentValue = 141.0m * 1.2m;
            }
            //PropertyInfo talentProp = typeof(U).GetProperties().Where(x => x.Name == spellProp.Name).First();
            //            var newProp = spellProp.GetValue(spellProp) * (1 + talentProp.Name) 
            spellProp.SetValue(spell, talentProp, null);
        }
    }

    public class TalentRankData
    {
        public int Rank { get; set; }
        public List<TalentEffect> Effects { get; set; } = new List<TalentEffect>();
    }

    public class TalentEffect
    {
        public TalentEffectTypes Type { get; set; }
        public List<string>? Spells { get; set; }
        public decimal Value { get; set; }
    }
    public enum TalentEffectTypes
    {
        Coefficient = 1,
        HealingIncrease = 2,
        Targets = 3,
        ManaCost = 4,
        StatIncrease = 5,
        PercentTransfer = 6,
        CastTime = 7,
        Cooldown = 8,
        Duration = 9,
        ProcChance = 10,
        ApplySpell = 11,
        Unique = 12,

    }
}
