using Mistweaver.SpellData.SpellModels.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
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
            ManaCost = 0.05m;
            HotInfoId = (int)HotIds.RefreshingJadeWind;
            HotInfo = new HotInfo()
            {
                Id = (int)HotIds.RefreshingJadeWind,
                Name = SpellNames.RefreshingJadeWind,
                Duration = 15,
                TickRate = .75m,
                IsExtendable = false,
                IsPandemic = false
            };
        }

    }
}
