using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class BlackoutKick : DamageBase
    {
        public BlackoutKick() 
        {
            Type = AbilityType.Physical;
            SpellId = 100784; 
            Name = SpellNames.BlackoutKick;
            Coefficient = 84.7m; 
            MaxTargets = 1; 
            CastTime = 1.5m; 
            Cooldown = 3; 
            IsCooldownHasted = true;
            IsAttackPower = true;
        }
    }
}
