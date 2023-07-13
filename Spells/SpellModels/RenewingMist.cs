using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Mistweaver.SpellData.SpellModels
{
    public class RenewingMist : HealBase
    {
        public RenewingMist()
        {
            SpellId = 115151;
            Name = "Renewing Mist";
            Coefficient = 196.65m;
            ManaCost = 0.018m;
            MaxTargets = 1;
            CastTime = 1.5m;
            MasteryTrigger = true;
            Cooldown = 9;
            HotInfoId = (int)HotIds.RenewingMist;
            HotInfo = new HotInfo
            {
                Id = (int)HotIds.RenewingMist,
                Name = "Renewing Mist",
                Duration = 20,
                TickRate = 2,
                SpellBaseId = 3
            };
        }

        public JsonArray Serialize()
        {
            RenewingMist rem = new RenewingMist();
            return rem.Serialize();
        }
    }
}
