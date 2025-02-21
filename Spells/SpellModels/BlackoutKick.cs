namespace Mistweaver.Data.SpellModels
{
    public class BlackoutKick : DamageBase
    {
        public BlackoutKick() 
        {
            Type = AbilityType.Physical;
            SpellId = 100784; 
            Name = SpellNames.BlackoutKick;
            Coefficient = 84.7m; 
            MaxTargets = 1; 
            CastTime = 1.5m; 
            Cooldown = 3; 
            IsCooldownHasted = true;
            IsAttackPower = true;
        }
    }
}
