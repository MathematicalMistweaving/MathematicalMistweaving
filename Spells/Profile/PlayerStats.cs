using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.Profile
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
        }

        public int Stamina { get; set; }
        public int Intellect { get; set; }
        public int CriticalStrike { get; set; }
        public int Haste { get; set; }
        public int Mastery { get; set; }
        public int Versatility { get; set; }
        public int Leech { get; set; } 
    }
}
