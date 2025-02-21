namespace Mistweaver.Data.SpellModels
{
    public class JadefireStompHeal : HealBase
    {
        public JadefireStompHeal()
        {
            SpellId = 388207;
            Name = SpellNames.JadefireStomp;
            Coefficient = 91.00m; 
            ManaCost = 0.04m;
            Cooldown = 30;
            CastTime = 1.5m;
            MaxTargets = 5;
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

    public class JadefireStompDmg : DamageBase
    {
        public JadefireStompDmg()
        {
            Type = AbilityType.Nature;
            SpellId = 388207;
            Name = SpellNames.JadefireStomp;
            Coefficient = 40;
            MaxTargets = 5;
            CastTime = 1.5m;
            Cooldown = 30;
            IsAttackPower = true; 
        }
    }
}
