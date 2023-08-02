using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Talents.Base;

namespace Mistweaver.Data.Talents
{
    public class AncientConcordance : TalentBase
    {
        public AncientConcordance()
        {
            Name = TalentNames.AncientConcordance;
            Tier = TalentTier.Tier3;
            MaxRank = 2;
            AffectedDamages = new List<string>() { SpellNames.BlackoutKick };
            Ranks = new List<TalentRankData>()
            {
                new TalentRankData() 
                { 
                    Rank = 1, 
                    Effects = new List<TalentEffect>()
                    {
                        new TalentEffect() { Type = TalentEffectTypes.Targets, Value = 2 },
                        new TalentEffect() { Type = TalentEffectTypes.ProcChance, Value = .05m }
                    },
                    
                },
                new TalentRankData() 
                { 
                    Rank = 2,
                    Effects = new List<TalentEffect>()
                    {
                        new TalentEffect() { Type = TalentEffectTypes.Targets,  Value = 3 },
                        new TalentEffect() { Type = TalentEffectTypes.ProcChance,  Value = .10m }
                    },
                }
            };
        }


        public override void ApplyTalent(IProfile profile, ISpellBook spellBook)
        {
            throw new NotImplementedException();
        }

    }
}
