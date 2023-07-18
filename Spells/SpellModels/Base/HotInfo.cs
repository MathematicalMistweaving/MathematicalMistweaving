using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.SpellModels.Base
{
    public class HotInfo
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        /**Spell Duration in Seconds**/
        public decimal Duration { get; set; }
        /**Frequency of Hot Tick in Seconds**/
        public decimal TickRate { get; set; }
        public bool TickRateHasted { get; set; } = true;

        public int SpellBaseId { get; set; }
        public bool IsExtendable { get; set; } = true;
        public bool IsPandemic { get; set; } = true;
        public void ModifyDuration(decimal newDuration)
        {
            this.Duration = newDuration;
        }

        public void AddDuration(decimal seconds)
        {
            this.Duration += seconds; 
        }
        public decimal HastedTickRate(decimal hasteMultiplier) 
        {
            if (this.TickRateHasted)
                return this.TickRate = this.TickRate / hasteMultiplier;

            return this.TickRate = this.TickRate;
        }
    }

    
}
