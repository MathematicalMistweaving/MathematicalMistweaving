using Mistweaver.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents.Base
{
    public class SelectedTalent : TalentBase
    {
        public SelectedTalent(TalentBase talent, int rank)
        {
            this.Name = talent.Name;
            this.Tier = talent.Tier;
            this.Ranks = talent.Ranks;
            this.MaxRank = talent.MaxRank;
            this.HasUniqueEffect = talent.HasUniqueEffect;
            this.AffectedHeals = talent.AffectedHeals;
            this.AffectedDamages = talent.AffectedDamages;
            this.SelectedRankData = talent.Ranks.Where(x => x.Rank == rank).First();
        }
        public TalentRankData SelectedRankData { get; set; }

        public override void ApplyTalent(IProfile profile, ISpellBook spellBook) { }

    }
}
