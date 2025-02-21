using Mistweaver.Data.Common;

namespace Mistweaver.Math.Models
{
    public static class Stats
    {
        public static Stat Crit = new Stat { Name = "Crit", StatPerPercent = 180, Type = StatType.Secondary, Base = 5m };
        public static Stat Haste = new Stat { Name = "Haste", StatPerPercent = 170, Type = StatType.Secondary, Base = 0m };
        public static Stat Mastery = new Stat { Name = "Mastery", StatPerPercent = 180, Type = StatType.Secondary, Base = 8, StatCoefficient = 4.2m };
        public static Stat Vers = new Stat { Name = "Vers", StatPerPercent = 205, Type = StatType.Secondary, Base = 0m };
        public static Stat Leech = new Stat { Name = "Leech", StatPerPercent = 148, Type = StatType.Tertiary, Base = 0m };
        public static Stat Intellect = new Stat { Name = "Intellect", StatPerPercent = 1, Type = StatType.Primary, Base = 2080 };
        public static Stat Stamina = new Stat { Name = "Stamina", StatPerPercent = .05m, Type = StatType.Tertiary , Base = 3848m };

        public static List<Stat> All = new List<Stat>()
        {
            Crit, Haste, Mastery, Vers, Leech, Intellect, Stamina
        };
    }

    public class Stat
    {
        public string Name { get; set; } = string.Empty;
        public decimal StatPerPercent { get; set; }
        public StatType Type { get; set; }
        public decimal Base { get; set; }
        public decimal StatCoefficient { get; set; } = 1;
    }
}
