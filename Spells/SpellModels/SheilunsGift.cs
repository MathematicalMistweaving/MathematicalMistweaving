namespace Mistweaver.Data.SpellModels
{
    public class SheilunsGift : HealBase
    {
        public const int MaxStacks = 10;
        public SheilunsGift() 
        {
            SpellId = 399491; 
            Name = SpellNames.SheilunsGift; 
            Coefficient = 114;
            MaxTargets = 3; 
            CastTime = 2; 
            Cooldown = 8; 
            ManaCost = 0.025m;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = false,
                Versatility = true
            };
        }
    }
}
