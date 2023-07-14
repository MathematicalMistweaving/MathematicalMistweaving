using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class ChiCocoon : HealBase
    {
        public ChiCocoon() 
        {
            SpellId = 1;
            CastTime = 0;
            ManaCost = 1m;
            Cooldown = 1m;
        }

        public class ChiCocoonChiJi : ChiCocoon
        {
            public ChiCocoonChiJi()
            {
                Name = "Chi Cocoon (Chi-Ji)";
                Coefficient = 0.10m;
                MaxTargets = 5;
                IsIndirect = true;
            }
        }

        public class ChiCocoonYulon : ChiCocoon
        {
            public ChiCocoonYulon()
            {
                Name = "Chi Cocoon (Yu'lon)";
                Coefficient = 0.10m;
                MaxTargets = 5;
                IsIndirect = true;
            }
        }
    }
}
