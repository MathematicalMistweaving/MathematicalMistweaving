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
        public EnvelopingBreath()
        {
            SpellId = 325209;
            Name = "Enveloping Breath";
            Coefficient = 162.00m;
            MaxTargets = 6;
            CastTime = 2;
            MasteryTrigger = false;
            IsIndirect = true;
            HotInfoId = (int)HotIds.EnvelopingBreath;
            HotInfo = new HotInfo()
            {
                Id = (int)HotIds.EnvelopingBreath,
                Name = "Enveloping Breath",
                Duration = 6,
                TickRate = 1,
                SpellBaseId = this.Id,
                IsExtendable = false
            };
    }
    }
}
