using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels
{
    public class ResonantFists : DamageBase
    {
        public ResonantFists() 
        {
            SpellId = 391400;
            Name = TalentNames.ResonantFists;
            Type = AbilityType.Nature;
            Coefficient = 15m;
            IsAttackPower = true;
            MaxTargets = int.MaxValue;
            Cooldown = 1;
            CastTime = 0;
            IsIndirect = true;
        }
        
    }
}
