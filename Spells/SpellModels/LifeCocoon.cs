using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels
{
    public class LifeCocoon : HealBase
    {
        public const decimal HealingIncrease_Hots = 0.50m;
        public LifeCocoon() 
        {
            SpellId = 116849;
            Name = SpellNames.LifeCocoon;
            Coefficient = 60.00m;
            ManaCost = 0.024m;
            MaxTargets = 1;
            CastTime = 0;
            MasteryTrigger = false;
            Cooldown = 120;
            IsHealthCoefficient = true;
            StatScaling = new StatScaling()
            {
                CriticalStrike = false,
                Haste = false,
                Mastery = false,
                Versatility = true
            };
        }
    }
}
