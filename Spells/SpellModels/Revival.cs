using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class Revival : HealBase
    {
        public Revival() 
        {
            SpellId = 115310; 
            Name = SpellNames.Revival; 
            Coefficient = 325.45m;
            ManaCost = 0.04374m; 
            MaxTargets = 20; 
            CastTime = 1.5m; 
            MasteryTrigger = true; 
            Cooldown = 180;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = false,
                Versatility = true
            };
        }
    }
    public class Restoral : HealBase
    {
        public Restoral()
        {
            SpellId = 388615;
            Name = SpellNames.Restoral;
            Coefficient = 325.45m;
            ManaCost = 0.04374m;
            MaxTargets = 20;
            CastTime = 1.5m;
            MasteryTrigger = true;
            Cooldown = 180;
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
