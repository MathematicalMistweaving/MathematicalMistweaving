namespace Mistweaver.SpellData.SpellModels
{
    public class ZenPulseHeal : HealBase
    {
        public ZenPulseHeal() 
        {
            Type = AbilityType.Nature;
            Name = SpellNames.ZenPulse;
            SpellId = 124081;
            Coefficient = 166.32m;
            CastTime = 1.5m;
            ManaCost = 0.01m;
            Cooldown = 30;
            MaxTargets = 1;
        }
    }
    public class ZenPulseDmg : DamageBase
    {
        public ZenPulseDmg()
        {
            Type = AbilityType.Nature;
            Name = SpellNames.ZenPulse;
            SpellId = 405426;
            Coefficient = 165.38m;
            CastTime = 1.5m;
            Cooldown = 30;
            MaxTargets = int.MaxValue;
            Cooldown = 30;
        }
    }
}