using Mistweaver.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents.Base
{
    public abstract class TalentBase
    {
       #region Constructor
        public TalentBase() { }
        #endregion

        #region Properties
        public string? Name { get; set; }
        public TalentTier Tier { get; set; }
        public int MaxRank { get; set; }
        public List<TalentRankData>? Ranks { get; set; }
        public bool HasUniqueEffect { get; set; } = false;
        public abstract decimal CalculateUniqueEffect<T>();
        #endregion
    }

    public class TalentRankData
    {
        public int Rank { get; set; }
        public List<TalentEffect> Effects { get; set; } = new List<TalentEffect>();
    }

    public class TalentEffect
    {
        public TalentEffectTypes Type { get; set; }
        public decimal Value { get; set; }
    }
    public enum TalentEffectTypes
    {
        Coefficient = 1,
        HealingIncrease = 2,
        Targets = 3,
        ManaCost = 4,
        StatIncrease = 5,
        PercentTransfer = 6,
        CastTime = 7,
        Cooldown = 8,
        Duration = 9,
        ProcChance = 10,
        ApplySpell = 11,
        Unique = 12,

    }
}
