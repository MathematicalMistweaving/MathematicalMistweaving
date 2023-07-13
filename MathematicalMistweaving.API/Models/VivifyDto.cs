using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathematicalMistweaving.API.Models
{
    public class VivifyDto : BaseSpellDto
    {
        public VivifyDto()
        {
            Id = 1;
            Name = "Vivify";
            ManaCost = .034m;
            Cooldown = 1.5m;
            Coefficient = TotalVivifyCoefficient();
        }

        public class VivifyPrimary : BaseSpellDto
        {
            public VivifyPrimary()
            {
                Coefficient = 141.00m;
                MaxTargets = 1;
                MasteryTrigger = true;
            }
        }

        public class VivifyCleave : BaseSpellDto
        {
            public VivifyCleave()
            {
                Coefficient = 91.52m;
                MaxTargets = 20;
                MasteryTrigger = false;
            }
        }

        public decimal TotalVivifyCoefficient()
        {
            var spells = new List<BaseSpellDto> {
               new VivifyPrimary(),
               new VivifyCleave(),
            };
            return GetTotalCoefficient(spells);
        }
    }

}
