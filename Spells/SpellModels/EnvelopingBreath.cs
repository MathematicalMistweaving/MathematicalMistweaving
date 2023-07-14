using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class EnvelopingBreath : HealBase
    {
        public const decimal HealingIncrease = 0.10m;
        public EnvelopingBreath()
        {
            SpellId = 325209;
            Name = SpellNames.EnvelopingBreath;
            Coefficient = 162.00m;
            MaxTargets = 6;
            CastTime = 2;
            MasteryTrigger = false;
            IsIndirect = true;
            HotInfoId = (int)HotIds.EnvelopingBreath;
            HotInfo = new HotInfo()
            {
                Id = (int)HotIds.EnvelopingBreath,
                Name = SpellNames.EnvelopingBreath,
                Duration = 6,
                TickRate = 1,
                SpellBaseId = this.Id,
                IsExtendable = false
            };
    }
    }
}
