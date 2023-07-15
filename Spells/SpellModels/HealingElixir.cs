using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels
{
    public class HealingElixir : HealBase
    {
        public HealingElixir() 
        {
            SpellId = 122281;
            Name = TalentNames.HealingElixir;
            Coefficient = 15.00m;
            ManaCost = 0;
            CastTime = 0;
            MaxTargets = 1;
            Cooldown = 30;
            Charges = 2;
            IsHealthCoefficient = true;
            StatScaling = new StatScaling
            {
                CriticalStrike = false,
                Haste = false,
                Mastery = false,
                Versatility = false,
            };
        }
    }
}
