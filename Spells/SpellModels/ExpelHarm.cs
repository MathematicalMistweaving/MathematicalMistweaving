using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class ExpelHarm : HealBase
    {
        public ExpelHarm(bool target) 
        {
            SpellId = target ? 325214 : 322101;
            Name = SpellNames.ExpelHarm;
            Coefficient = 120;
            MaxTargets = target ? 2 : 1;
            CastTime = 0;
            Cooldown = 15m;
            ManaCost = 0.30m;
            MasteryTrigger = true;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = false,
                Versatility = true
            };
        }

    }
}
