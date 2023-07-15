using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using System.Xml.Linq;
using Mistweaver.SpellData.SpellModels.Base;

namespace Mistweaver.SpellData.SpellModels
{
    public class RenewingMist : HealBase
    {
        public RenewingMist()
        {
            SpellId = 115151;
            Name = SpellNames.RenewingMist;
            Coefficient = 196.65m;
            ManaCost = 0.018m;
            MaxTargets = 1;
            CastTime = 1.5m;
            MasteryTrigger = true;
            Cooldown = 9;
            Charges = 2;
            HotInfoId = (int)HotIds.RenewingMist;
            HotInfo = new HotInfo
            {
                Id = (int)this.HotInfoId,
                Name = this.Name,
                Duration = 20,
                TickRate = 2,
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

        public JsonArray Serialize()
        {
            RenewingMist rem = new RenewingMist();
            return rem.Serialize();
        }
    }
}
