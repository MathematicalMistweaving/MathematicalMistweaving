namespace Mistweaver.Data.SpellModels
{
    public class ExpelHarmHeal : HealBase
    {
        public ExpelHarmHeal() 
        {
            SpellId = 322101;
            Name = SpellNames.ExpelHarm;
            Coefficient = 780;
            MaxTargets = 1;
            CastTime = 0;
            Cooldown = 15m;
            ManaCost = 0.014m;
            MasteryTrigger = true;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = false,
                Versatility = true
            };
        }

    }

    public class ExpelHarmDmg : DamageBase
    {
        public ExpelHarmDmg()
        {
            SpellId = 115129;
            Name = SpellNames.ExpelHarm;
            Coefficient = 0.25m;
            CastTime = 1.5m;
            MaxTargets = 1;
            Cooldown = 15m;
            StatScaling = new StatScaling() { CriticalStrike = true, Haste = false, Mastery = false, Versatility = true };
        }
    }
}
