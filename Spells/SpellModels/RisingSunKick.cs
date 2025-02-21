namespace Mistweaver.Data.SpellModels
{
    public class RisingSunKick : DamageBase
    {
        public RisingSunKick() 
        {
            Type = AbilityType.Physical;
            SpellId = 107428; 
            Name = SpellNames.RisingSunKick;
            Coefficient = 143.8m; 
            ManaCost = .02m; 
            MaxTargets = 1; 
            CastTime = 1.5m; 
            Cooldown = 12; 
            IsCooldownHasted = true;
            IsAttackPower = true;
        }
    }
}
