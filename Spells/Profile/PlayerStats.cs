using Mistweaver.Data.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Profile
{
    public class PlayerStats
    {
        public PlayerStats() { }
        public PlayerStats(PlayerStats stats)
        {
            this.Stamina = stats.Stamina;
            this.Intellect = stats.Intellect;
            this.CriticalStrike = stats.CriticalStrike;
            this.Haste = stats.Haste;
            this.Mastery = stats.Mastery;
            this.Versatility = stats.Versatility;
            this.Leech = stats.Leech;
            this.Multipliers = new StatMultipliers(stats.CriticalStrike, stats.Haste, stats.Mastery, stats.Versatility, stats.Leech);
        }

        public int Stamina { get; set; }
        public int Intellect { get; set; }
        public int CriticalStrike { get; set; }
        public int Haste { get; set; }
        public int Mastery { get; set; }
        public int Versatility { get; set; }
        public int Leech { get; set; }
        public StatMultipliers Multipliers { get; set; }
        public class StatMultipliers
        {
            public StatMultipliers(int critValue, int hasteValue, int masteryValue, int versValue, int leechValue)
            {
                Crit = StatHelper.CalculateStatDr(critValue, Stats.Crit);
                Haste = StatHelper.CalculateStatDr(hasteValue, Stats.Haste);
                Mastery = StatHelper.CalculateStatDr(masteryValue, Stats.Mastery);
                Versatility = StatHelper.CalculateStatDr(versValue, Stats.Vers);
                Leech = StatHelper.CalculateStatDr(leechValue, Stats.Leech);
            }
            public decimal Crit { get; set; }
            public decimal Haste { get; set; }
            public decimal Mastery { get; set; }
            public decimal Versatility { get; set; }
            public decimal Leech { get; set;}
        }
    } 
}

    
