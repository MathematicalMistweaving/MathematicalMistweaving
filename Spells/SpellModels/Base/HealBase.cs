﻿namespace Mistweaver.Data.SpellModels.Base
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
