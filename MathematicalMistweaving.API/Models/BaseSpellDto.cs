using Mistweaver.SpellData.SpellModels;

namespace MathematicalMistweaving.API.Models
{
    public class BaseSpellDto
    {
        /**internal id**/
        public int Id { get; set; }
        /**Game SpellId**/
        public int SpellId { get; set; }
        /**Spell Name**/
        public string? Name { get; set; }
        /**Coefficient/Max HP Coefficient**/
        public decimal Coefficient { get; set; }
        /**Mana cost in Percent of Base Mana**/
        public decimal? ManaCost { get; set; }
        /**Max number of Targets (default 1)**/
        public int MaxTargets { get; set; }
        /**Cooldown in Seconds**/
        public decimal? Cooldown { get; set; }
        /**Time to Cast Spell in Seconds (default to 1.5s for the global cooldown and for instant casts)**/
        public decimal CastTime { get; set; }
        /**can be cancelled for partial potency**/
        public bool IsChannel { get; set; } = false;
        /**the coefficient of the spell is based off max health rather than Coefficient**/
        public bool IsHealthBasedCoefficient { get; set; } = false;
        /**the spell effect comes from another source and is not directly cast (ie. enveloping breath ancinet teachings etc)**/
        public bool IsIndirect { get; set; } = false;
        /**Does this spell proc gusts of mists on the target (default false)**/
        public bool MasteryTrigger { get; set; } = false;
        public int? HotInfoId { get; set; }
        public virtual HotInfo? HotInfo { get; set; }
        /**Coefficient per Mana**/
        public decimal? CoefficientPerMana => Coefficient / ManaCost;
        /**Coefficient per Second**/
        public decimal? CoefficientPerSecond => Coefficient / HotInfo?.Duration;
        /**Coefficient per Tick**/
        public decimal? CoefficientPerTick => Coefficient / (HotInfo?.Duration / HotInfo?.TickRate);

        public decimal GetTotalCoefficient(List<BaseSpellDto> spells)
        {
            decimal total = 0;

            foreach (var spell in spells)
            {
                total += spell.Coefficient * spell.MaxTargets;
            }
            return total;
        }
    }
}
