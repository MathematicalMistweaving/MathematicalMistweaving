﻿namespace Mistweaver.Data.SpellModels.Base
{
    public class DotInfo
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        /**Spell Duration in Seconds**/
        public decimal Duration { get; set; }
        /**Frequency of Hot Tick in Seconds**/
        public decimal TickRate { get; set; }
        public bool TickRateHasted { get; set; } = false;

        public int SpellBaseId { get; set; }
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
