using Mistweaver.SpellData.SpellModels.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{

        public class EyeOfTheTigerHeal : HealBase
        {
            public EyeOfTheTigerHeal()
            {
                Type = AbilityType.Nature;
                Name = TalentNames.EyeOfTheTiger;
                SpellId = 196608;
                CastTime = 0;
                Coefficient = 28.1736m;
                MaxTargets = 1;
                IsAttackPower = true;
                IsIndirect = true;
                HotInfoId = (int)HotIds.EyeOfTheTiger;
                HotInfo = new HotInfo()
                {
                    Id = (int)this.HotInfoId,
                    Name = this.Name,
                    Duration = 8,
                    TickRate = 2,
                    SpellBaseId = this.Id,
                    IsExtendable = false,
                    TickRateHasted = false,
                };
                StatScaling = new StatScaling
                {
                    CriticalStrike = true,
                    Haste = false,
                    Mastery = false,
                    Versatility = true,
                };

            }
        }
        public class EyeOfTheTigerDmg : DamageBase
        {
            public EyeOfTheTigerDmg()
            {
                Type = AbilityType.Nature;
                Name = TalentNames.EyeOfTheTiger;
                SpellId = 196608;
                CastTime = 0;
                Coefficient = 28.1736m;
                MaxTargets = 1;
                IsAttackPower = true;
                IsIndirect = true;
                DotInfoId = (int)DotIds.EyeOfTheTiger;
                DotInfo = new DotInfo()
                {
                    Id = (int)this.DotInfoId,
                    Name = this.Name,
                    Duration = 8,
                    TickRate = 2,
                    SpellBaseId = this.Id,
                };
                StatScaling = new StatScaling
                {
                    CriticalStrike = true,
                    Haste = false,
                    Mastery = false,
                    Versatility = true,
                };

            }
        }

}
