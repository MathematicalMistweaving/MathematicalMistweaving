﻿namespace Mistweaver.Data.SpellModels.Base
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

        public decimal PandemicDuration()
        {
            return this.Duration * (1 + GlobalValues.Pandemic);
        }

        public void AddDuration(decimal seconds)
        {
            if(this.IsExtendable)
                this.Duration += seconds; 
                
        }
        public decimal HastedTickRate(decimal hasteMultiplier) 
        {
            if (this.TickRateHasted)
                return this.TickRate = this.TickRate / hasteMultiplier;

            return this.TickRate = this.TickRate;
        }

        /**Primarily for unique spells with hasted channels like Refreshing Jade wind**/
        public decimal HastedDuration(HealBase spell, decimal hasteMultiplier)
        {
            if (spell.IsChannel && spell.Id == this.SpellBaseId)
                return this.Duration = this.Duration / hasteMultiplier;

            return this.Duration;
        }
    }

    
}
