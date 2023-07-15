using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.Data.SpellModels.Base;

namespace Mistweaver.Data.SpellModels
{
    public class ChiCocoon : HealBase
    {
        public ChiCocoon() 
        {
            CastTime = 0;
            Coefficient = 0.10m;
            MaxTargets = 5;
            IsIndirect = true;
            StatScaling = new StatScaling() { CriticalStrike = false, Haste = false, Mastery = false, Versatility = true };
        }

        public class ChiCocoonChiJi : ChiCocoon
        {
            public ChiCocoonChiJi()
            {
                Name = SpellNames.ChiCocoon_ChiJi;
                SpellId = 406220;
            }
        }

        public class ChiCocoonYulon : ChiCocoon
        {
            public ChiCocoonYulon()
            {
                Name = SpellNames.ChiCocoon_Yulon;
                SpellId = 406139;
            }
        }
    }
}
