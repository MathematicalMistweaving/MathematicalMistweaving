using Mistweaver.SpellData.SpellModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathematicalMistweaving.API.Models
{
    public class RenewingMistDto : BaseSpellDto
    {
        public RenewingMistDto()
        {
            Id = 2;
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
    }

}
