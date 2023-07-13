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
            Name = "Renewing Mist";
            Coefficient = 196.65m;
            ManaCost = .018m;
            MaxTargets = 1;
            Cooldown = 9;
            MasteryTrigger = true;
            HotInfoId = 2;
            HotInfo = new HotInfo
            {
                Id = 2,
                Duration = 20,
                TickRate = 2,
                SpellBaseId = 2,
            };
        }

        public JsonArray Serialize()
        {
            RenewingMist rem = new RenewingMist();
            return rem.Serialize();
        }
    }
}
