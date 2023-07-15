using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels
{
    public class TigerPalm: DamageBase
    {
        public TigerPalm() 
        {
            Type = AbilityType.Physical;
            SpellId = 100780; 
            Name = "Tiger Palm"; 
            Coefficient = 27.027m; 
            MaxTargets = 1; 
            CastTime = 1.5m; 
            IsAttackPower = true;
        }  
    }
}
