namespace Mistweaver.Data.SpellModels
{
    public class RisingMist : HealBase
    {
        public RisingMist() 
        {
            SpellId = 274909;
            Name = TalentNames.RisingMist;
            Coefficient = 23.94m;
            MaxTargets = 30;
            CastTime = 0;
            IsIndirect = true;
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
