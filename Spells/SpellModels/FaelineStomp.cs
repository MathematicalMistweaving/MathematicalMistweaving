using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class FaelineStompHeal : HealBase
    {
        public FaelineStompHeal()
        {
            SpellId = 388207;
            Name = SpellNames.FaelineStomp;
            Coefficient = 91.00m; 
            ManaCost = 0.04m;
            Cooldown = 30;
            CastTime = 1.5m;
            MaxTargets = 5;

        }
        public class FaelineStompEssenceFontHit : EssenceFont.EssenceFontHit
        {
            public FaelineStompEssenceFontHit()
            {
                SpellId = 344006;
                Name = SpellNames.EssenceFontFLS;
                MaxTargets = 5;
                ManaCost = 0.04m;
            }
        }
        public class FaelineStompEssenceFontHot : EssenceFont.EssenceFontHot
        {
            public FaelineStompEssenceFontHot() 
            {
                SpellId = 344006;
                Name = SpellNames.EssenceFontFLS;
                MaxTargets = 5;
                ManaCost = 0.04m;
                HotInfoId = (int)HotIds.EssenceFont_FLS;
                HotInfo = new HotInfo
                {
                    Id = (int)HotIds.EssenceFont_FLS,
                    Name = SpellNames.EssenceFontFLS,
                    Duration = 8,
                    TickRate = 2,
                    SpellBaseId = this.Id,
                };
            }
        }

    }

    public class FaelineStompDmg : DamageBase
    {
        public FaelineStompDmg()
        {
            Type = AbilityType.Nature;
            SpellId = 388207;
            Name = SpellNames.FaelineStomp;
            Coefficient = 40;
            MaxTargets = 5;
            CastTime = 1.5m;
            Cooldown = 30;
            IsAttackPower = true; 
        }
    }
}
