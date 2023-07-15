using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Mistweaver.SpellData.SpellModels
{
    public class ChiWaveHeal : HealBase
    { 
        public ChiWaveHeal() 
        {
            SpellId = 132463;
            Coefficient = 42;
            Name = SpellNames.ChiWave;
            CastTime = 1.5m;
            MaxTargets = 4;
            IsAttackPower = true;
            Cooldown = 15;
            StatScaling = new StatScaling() { CriticalStrike = true, Haste = false, Mastery = false, Versatility = true };
        }
    }

    public class ChiWaveDmg : DamageBase
    {
        public ChiWaveDmg()
        {
            Type = AbilityType.Nature;
            SpellId = 115098;
            Coefficient = 14.2015m;
            Name = SpellNames.ChiWave;
            CastTime = 1.5m;
            MaxTargets = 4;
            IsAttackPower = true;
            Cooldown = 15;
        }
    }

}
