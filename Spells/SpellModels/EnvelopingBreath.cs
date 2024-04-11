using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Mistweaver.Data.SpellModels.Base;

namespace Mistweaver.Data.SpellModels
{
    public class EnvelopingBreath : HealBase
    {
        public const decimal HealingIncrease = 0.10m;
        public EnvelopingBreath()
        {
            SpellId = 325209;
            Name = SpellNames.EnvelopingBreath;
            Coefficient = 162.00m;
            MaxTargets = 5;
            CastTime = 2;
            MasteryTrigger = false;
            IsIndirect = true;
            HotInfoId = (int)HotIds.EnvelopingBreath;
            HotInfo = new HotInfo()
            {
                Id = (int)this.HotInfoId,
                Name = this.Name,
                Duration = 6,
                TickRate = 1,
                SpellBaseId = this.Id,
                IsExtendable = false
            };
            StatScaling = new StatScaling() 
            { 
                CriticalStrike = true, 
                Haste = true, 
                Mastery = false, 
                Versatility = true 
            };
        }
    }
}
