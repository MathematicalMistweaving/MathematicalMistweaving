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
        public ImprovedVivify()
        {
            Name = TalentNames.ImprovedVivify;
            Tier = TalentTier.Tier1;
            MaxRank = 2;
            AffectedHeals = new List<string> { SpellNames.Vivify, SpellNames.Vivify };
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
                            Value = .40m
                        }
                    }
                }
            };
        }
    }
}
