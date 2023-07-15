using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels.Base
{
    public class DamageBase : SpellBase
    {
        public DamageBase() 
        {
            StatScaling = new StatScaling() { CriticalStrike = true, Haste = false, Mastery = false, Versatility = true };
        }
        public int? DotInfoId { get; set; }
        public virtual DotInfo? DotInfo { get; set; }
    }
}
