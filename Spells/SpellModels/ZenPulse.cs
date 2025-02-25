﻿namespace Mistweaver.Data.SpellModels
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