using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Mistweaver.SpellData.SpellModels
{
    public class EnvelopingMist : HealBase
    {
        public EnvelopingMist() 
        {
            SpellId = 124682; 
            Name = "Enveloping Mist"; 
            Coefficient = 286.80m; 
            ManaCost = 0.048m;
            MaxTargets = 1;
            CastTime = 2;
            MasteryTrigger = true;
            HotInfoId = (int)HotIds.EnvelopingMist;
            HotInfo = new HotInfo()
            {

            };// Hots.Where(x => x.Id == (int)HotIds.EnvelopingMist).FirstOrDefault() 
        }
    }
}
