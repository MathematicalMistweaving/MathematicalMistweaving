using Mistweaver.Data.SpellModels.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels
{
    public class RefreshingJadeWind : HealBase
    {
        public RefreshingJadeWind()
        {
            SpellId = 196725;
            Name = SpellNames.RefreshingJadeWind;
            Coefficient = 277.704m;
            MaxTargets = 6;
            CastTime = 1.5m;
            Cooldown = 45;
            IsCooldownHasted = true;
            IsChannel = true;
            ManaCost = 0.05m;
            HotInfoId = (int)HotIds.RefreshingJadeWind;
            HotInfo = new HotInfo()
            {
                Id = (int)this.HotInfoId,
                Name = this.Name,
                Duration = 15,
                TickRate = .75m,
                IsExtendable = false,
                IsPandemic = false
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
