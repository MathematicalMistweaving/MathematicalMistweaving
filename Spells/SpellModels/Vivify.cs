﻿namespace Mistweaver.Data.SpellModels
{
    public class Vivify : HealBase
    {
        public Vivify()
        {
            SpellId = 116670;
            CastTime = 1.5m;
            ManaCost = .034m;
            Cooldown = 1.5m;
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = false,
                Versatility = true
            };
        }

        public class VivifyPrimary : Vivify
        {
            public VivifyPrimary()
            {
                Name = SpellNames.Vivify;
                Coefficient = 275.373m;
                MaxTargets = 1;
                MasteryTrigger = true;
            }
        }

        public class VivifyCleave : Vivify
        {
            public VivifyCleave()
            {
                Name = SpellNames.VivifyCleave;
                Coefficient = 114.4m;
                MaxTargets = 20;
                MasteryTrigger = false;
            }
        }
    }
}
