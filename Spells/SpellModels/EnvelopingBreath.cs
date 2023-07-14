using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Mistweaver.SpellData.SpellModels
{
    public class EnvelopingBreath : HealBase
    {
        public EnvelopingBreath()
        {
            SpellId = 325209;
            Name = "Enveloping Breath";
            Coefficient = 162.00m;
            MaxTargets = 6;
            CastTime = 2;
            MasteryTrigger = false;
            IsIndirect = true;
            HotInfoId = (int)HotIds.EnvelopingBreath;
            HotInfo = new HotInfo()
            {

            };// Hots.Where(x => x.Id == (int)HotIds.EnvelopingBreath).FirstOrDefault()
    }
    }
}
