using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class ChiCocoon : HealBase
    {
        public ChiCocoon() 
        {
            CastTime = 0;
            Coefficient = 0.10m;
            MaxTargets = 5;
            IsIndirect = true;
        }

        public class ChiCocoonChiJi : ChiCocoon
        {
            public ChiCocoonChiJi()
            {
                Name = "Chi Cocoon (Chi-Ji)";
                SpellId = 406220;
            }
        }

        public class ChiCocoonYulon : ChiCocoon
        {
            public ChiCocoonYulon()
            {
                Name = "Chi Cocoon (Yu'lon)";
                SpellId = 406139;
            }
        }
    }
}
