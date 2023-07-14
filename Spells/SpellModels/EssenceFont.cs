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
                Name = "Essence Font";
                Coefficient = 46.4094m;
                MaxTargets = 18;
            }
        }

        public class EssenceFontHot : EssenceFont
        {
            public EssenceFontHot()
            {
                Name = "Essence Font (Hot)";
                Coefficient = 17.388m;
                MaxTargets = 18;
                HotInfoId = (int)HotIds.EssenceFont;
                HotInfo = new HotInfo
                {
                    Id = (int)HotIds.EssenceFont,
                    Name = "Essence Font",
                    Duration = 8,
                    TickRate = 2,
                    SpellBaseId = this.Id,
                };
            }
        }
    }
}
