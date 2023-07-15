using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class EssenceFont : HealBase
    {
        public EssenceFont()
        {
            SpellId = 191837;
            ManaCost = .072m;
            Cooldown = 12m;
            MasteryTrigger = false;
            CastTime = 3;
            IsChannel = true;
        }

        public class EssenceFontHit : EssenceFont
        {
            public EssenceFontHit()
            {
                Name = SpellNames.EssenceFont;
                Coefficient = 46.4094m;
                MaxTargets = 18;
                StatScaling = new StatScaling()
                {
                    CriticalStrike = true,
                    Haste = false,
                    Mastery = false,
                    Versatility = true
                };
            }
        }

        public class EssenceFontHot : EssenceFont
        {
            public EssenceFontHot()
            {
                Name = SpellNames.EssenceFontHoT;
                Coefficient = 17.388m;
                MaxTargets = 18;
                HotInfoId = (int)HotIds.EssenceFont;
                HotInfo = new HotInfo
                {
                    Id = (int)HotIds.EssenceFont,
                    Name = SpellNames.EssenceFont,
                    Duration = 8,
                    TickRate = 2,
                    SpellBaseId = this.Id,
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
}
