using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels
{
    public class SpinningCraneKick : DamageBase
    {
        public SpinningCraneKick() 
        {
            Type = AbilityType.Physical;
            SpellId = 107270; 
            Name = "Spinning Crane Kick"; 
            Coefficient = 40;
            MaxTargets = 5; 
            CastTime = 1.5m; 
            IsChannel = true; 
            IsAttackPower = true;
            IsSqrtScaling = true;
        }
    }
}
