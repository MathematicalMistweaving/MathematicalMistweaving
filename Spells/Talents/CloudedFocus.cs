using Mistweaver.Data.Helpers;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Profile;
using Mistweaver.Data.SpellModels;
using Mistweaver.Data.Talents.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents
{
    public class CloudedFocus : TalentBase
    {
        public CloudedFocus(ISpellBook spellBook, IProfile profile) : base(spellBook, profile)
        {
            
            Name = TalentNames.CloudedFocus;
            Tier = TalentTier.Tier2;
            AffectedSpells = new List<string>{ SpellNames.Vivify, SpellNames.VivifyCleave, SpellNames.EnvelopingMist, SpellNames.EnvelopingBreath };
            MaxRank = 1;
            HasUniqueEffect = true;
            Ranks = new List<TalentRankData>()
            {
                new TalentRankData()
                {
                    Rank = 1,
                    Effects =
                    {
                        new TalentEffect()
                        {
                            Type = TalentEffectTypes.Coefficient,
                            Spells = this.AffectedSpells,
                            Value = 0.20m
                        }
                    }
                }
            };
        }

        public override decimal CalculateUniqueEffect<T>()
        {
            ////TODO: Implement

            return 1;
            
            //throw new NotImplementedException();
        }

        public override decimal CalculateHps<T>(ISpellBook spellBook, IProfile profile)
        {
            decimal hps = 0m;
            //TODO: Implement standard effect 
            Type spell = typeof(T);
            ModifyProperties<T, CloudedFocus>((T)(object)spell);
            //THEN

            if (HasUniqueEffect) { CalculateUniqueEffect<T>(); }

            return hps;
        }
    }
}
