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
        public List<string> AffectedHeals {get; set;} = new List<string>();
        public List<string>? AffectedDamages { get; set; } = new List<string>();

        public abstract void ApplyTalent(IProfile profile, ISpellBook spellBook);
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
}
