using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Talents.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents
{
    public class ImprovedVivify : TalentBase
    {
        public ImprovedVivify(ISpellBook spellBook, IProfile profile) : base(spellBook, profile)
        {
            Name = TalentNames.ImprovedVivify;
            Tier = TalentTier.Tier1;
            AffectedSpells = new List<string> { SpellNames.Vivify, SpellNames.VivifyCleave };
            MaxRank = 2;
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
                            Value = .20m
                        }
                    }
                },
                new TalentRankData()
                {
                    Rank = 2,
                    Effects =
                    {
                        new TalentEffect()
                        {
                            Type = TalentEffectTypes.Coefficient,
                            Spells = this.AffectedSpells,
                            Value = .40m
                        }
                    }
                }
            };
        }


        public override decimal CalculateHps<T>(ISpellBook spellBook, IProfile profile)
        {
            throw new NotImplementedException();
        }

        public override decimal CalculateUniqueEffect<T>()
        {
            throw new NotImplementedException();
        }
    }
}
