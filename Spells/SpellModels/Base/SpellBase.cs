using System.Buffers.Text;
using System.Diagnostics.Metrics;
using System.Drawing;
using System.Text.Json.Serialization;

namespace Mistweaver.SpellData.SpellModels.Base
{
    public class SpellBase
    {
        public static int _counter = 0;
        public SpellBase()
        {
            Id = Interlocked.Increment(ref _counter);
        }

        #region Required Properties
        /** what type of damage/healing does the spell do**/
        public AbilityType Type { get; set; }
        /**internal id**/
        public int Id { get; set; }
        /**Game SpellId**/
        public int SpellId { get; set; }
        /**Spell Name**/
        public string Name { get; set; }
        /**Spellpower/Max HP Coefficient**/
        public decimal Coefficient { get; set; }
        /**Max number of Targets (default 1)**/
        public int MaxTargets { get; set; }
        /**Time to Cast Spell in Seconds (default to 1.5s for the global cooldown and for instant casts)**/
        public decimal CastTime { get; set; }

        #endregion

        #region Optional Properties

        /**Cooldown in Seconds**/
        public decimal? Cooldown { get; set; }
        /**Mana cost in Percent of Base Mana**/
        public decimal? ManaCost { get; set; } = 0;
        /**Is the cooldown of this spell reduced by haste**/
        public bool IsCooldownHasted { get; set; } = false;

        /**can be cancelled for partial potency**/
        public bool IsChannel { get; set; } = false;
        /**The coefficient of the spell is based off max health rather than spellpower**/
        public bool IsHealthCoefficient { get; set; } = false;
        /**The coefficient of the spell is based off attack power rather than spellpower**/
        public bool IsAttackPower { get; set; } = false;
        public bool IsSqrtScaling { get; set; } = false;
        /**The spell effect comes from another source and is not directly cast (ie. enveloping breath ancinet teachings etc)**/
        public bool IsIndirect { get; set; } = false;
        /**The spell also has a damaging effect**/
        public List<int>? SourceIds { get; set; }

        #endregion
    }
}