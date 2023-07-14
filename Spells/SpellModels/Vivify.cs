using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class Vivify : HealBase
    {
        public Vivify()
        {
            SpellId = 116670;
            CastTime = 1.5m;
            ManaCost = .034m;
            Cooldown = 1.5m;
        }

        public class VivifyPrimary : Vivify
        {
            public VivifyPrimary()
            {
                Name = "Vivify";
                Coefficient = 141.00m;
                MaxTargets = 1;
                MasteryTrigger = true;
            }
        }

        public class VivifyCleave : Vivify
        {
            public VivifyCleave()
            {
                Name = "Vivify Cleave";
                Coefficient = 91.52m;
                MaxTargets = 20;
                MasteryTrigger = false;
            }
        }

        public decimal TotalVivifyCoefficient()
        {
            var spells = new List<HealBase> {
               new VivifyPrimary(),
               new VivifyCleave(),
            };
            return 0.1m;//GetTotalCoefficient(spells);
        }
    }
}
