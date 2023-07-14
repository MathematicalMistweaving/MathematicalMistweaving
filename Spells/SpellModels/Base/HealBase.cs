using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace Mistweaver.SpellData.SpellModels.Base
{
    public class HealBase : SpellBase
    {
        public HealBase() 
        {
            Type = AbilityType.Nature;
        }
        /**Does this spell proc gusts of mists on the target (default false)**/
        public bool MasteryTrigger { get; set; } = false;
        public int? HotInfoId { get; set; }
        public virtual HotInfo? HotInfo { get; set; }
    }
}
