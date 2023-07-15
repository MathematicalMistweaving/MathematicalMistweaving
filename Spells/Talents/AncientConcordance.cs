using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents.Talents
{
    public class AncientConcordance : TalentBase
    {
        public AncientConcordance() 
        {
            Name = TalentNames.AncientConcordance;
            Tier = TalentTier.Tier3;
            AffectedSpells = new string[] { SpellNames.BlackoutKick, TalentNames.TeachingsOfTheMonastery };
            MaxRank = 2;
            Ranks = new List<TalentRankData>()
            {
                new TalentRankData() 
                { 
                    Rank = 1, 
                    SpellAndValues = new Dictionary<string, decimal>(){ { this.AffectedSpells[0], 2 }, { this.AffectedSpells[1], .05m } } 
                },
                new TalentRankData() 
                { 
                    Rank = 1, 
                    SpellAndValues = new Dictionary<string, decimal>(){ { this.AffectedSpells[0], 3 }, { this.AffectedSpells[1], .10m } } 
                }
            };
        }

    }
}
