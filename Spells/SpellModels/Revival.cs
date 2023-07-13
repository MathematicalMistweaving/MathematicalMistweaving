using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class Revival : HealBase
    {
        public Revival() 
        {
            SpellId = 115310; 
            Name = "Revival"; 
            Coefficient = 325.45m;
            ManaCost = 0.04374m; 
            MaxTargets = 20; 
            CastTime = 1.5m; 
            MasteryTrigger = true; 
            Cooldown = 180;
        }
    }
}
