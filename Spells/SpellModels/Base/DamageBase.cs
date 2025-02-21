namespace Mistweaver.Data.SpellModels.Base
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
