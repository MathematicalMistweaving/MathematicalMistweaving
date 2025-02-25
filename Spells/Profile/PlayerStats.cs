﻿namespace Mistweaver.Data.Profile
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
        public StatMultipliers Multipliers { get; set; } = new();
        
    }
    public class StatMultipliers
    {
        public StatMultipliers() { }
        public StatMultipliers(decimal critMulti, decimal hasteMulti, decimal masteryMulti, decimal versMulti, decimal leechMulti)
        {
            Crit = critMulti;
            Haste = hasteMulti;
            Mastery = masteryMulti;
            Versatility = versMulti;
            Leech = leechMulti;
        }
        public decimal Crit { get; set; } = 1.0m;
        public decimal Haste { get; set; } = 1.0m;
        public decimal Mastery { get; set; } = 1.0m;
        public decimal Versatility { get; set; } = 1.0m;
        public decimal Leech { get; set; } = 1.0m;
    }
}

    
