namespace Mistweaver.Data.SpellModels
{
    public class TouchOfDeath : DamageBase
    {
        public TouchOfDeath() 
        {
            Type = AbilityType.Physical;
            SpellId = 322109; 
            Name = "Touch of Death"; 
            Coefficient = 35; 
            MaxTargets = 1; 
            CastTime = 1.5m; 
            IsHealthCoefficient = true;
            Cooldown = 180;
        }
    }
}
