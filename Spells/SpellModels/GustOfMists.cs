using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class GustOfMists : HealBase
    {
        public GustOfMists() 
        {
            SpellId = 191894; 
            Name = SpellNames.GustOfMists; 
            Coefficient = 33.6m;
            MaxTargets = 1; 
            IsIndirect = true; 
            CastTime = 0;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = true,
                Versatility = true
            };
        }
    }

    public class GustsOfMistsChiji : HealBase 
    {
        public GustsOfMistsChiji() 
        {
            SpellId = 343819;
            Name = SpellNames.GustofMists_ChiJi;
            Coefficient = 33.6m;
            MaxTargets = 2; 
            CastTime = 0; 
            IsIndirect = true;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = true,
                Versatility = true
            };
        }
    }
}
