using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class ChiBurstHeal : HealBase
    {
        public ChiBurstHeal()
        {
            SpellId = 130654;
            Coefficient = 94.5m;
            Name = SpellNames.ChiBurst;
            CastTime = .75m;
            MaxTargets = 6;
            IsSqrtScaling = true;
            Cooldown = 30;
            IsAttackPower = true;
            StatScaling = new StatScaling() { CriticalStrike = true, Haste = false, Mastery = false, Versatility = true };
        } 
    }
    public class ChiBurstDmg : DamageBase
    {
        public ChiBurstDmg()
        {
            Type = AbilityType.Nature;
            SpellId = 148135;
            Coefficient = 46;
            Name = SpellNames.ChiBurst;
            CastTime = .75m;
            MaxTargets = 6;
            IsSqrtScaling = true;
            Cooldown = 30;
            IsAttackPower = true;
        }
    }


}
