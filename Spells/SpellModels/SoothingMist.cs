using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class SoothingMist : HealBase
    {
        public SoothingMist()
        {
            SpellId = 115175;
            Name = "Soothing Mist";
            Coefficient = 440m;
            ManaCost = 0.032m;
            MaxTargets = 1;
            CastTime = 8;
            MasteryTrigger = true;
            IsChannel = true;
            HotInfoId = (int)HotIds.SoothingMist;
            HotInfo = new HotInfo()
            {
                Id = (int)HotIds.SoothingMist,
                Name = "Soothing Mist",
                Duration = 8,
                TickRate = 1,
                SpellBaseId = this.Id,
                IsExtendable = false
            };
        }
    }
}
