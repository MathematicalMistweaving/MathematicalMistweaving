using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class SoothingBreath : HealBase
    {
        public SoothingBreath()
        {
            SpellId = 343737;
            Name = SpellNames.SoothingBreath;
            Coefficient = 105m;
            MaxTargets = 3;
            MasteryTrigger = false;
            Cooldown = 1.5m; 
            CastTime = 4.5m; 
            IsIndirect = true; 
            HotInfoId = (int)HotIds.SoothingBreath;
            HotInfo = new HotInfo()
            {
                Id = (int)HotIds.SoothingBreath,
                Name = SpellNames.SoothingBreath,
                Duration = 4.5m,
                TickRate = 1,
                SpellBaseId = this.Id
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
