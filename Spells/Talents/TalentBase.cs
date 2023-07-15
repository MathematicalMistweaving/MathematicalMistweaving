using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents.Talents
{
    public class TalentBase
    {
        public TalentBase() { }
        
        public string Name { get; set; }
        public TalentTier Tier { get; set; } 
        public string[] AffectedSpells { get; set; }
        public int MaxRank { get; set; }
        public List<TalentRankData> Ranks { get; set; }

    }

    public class TalentRankData
    {
        public int Rank { get; set; }
        public Dictionary<string, decimal> SpellAndValues { get; set; } = new Dictionary<string, decimal>();
    }
}
