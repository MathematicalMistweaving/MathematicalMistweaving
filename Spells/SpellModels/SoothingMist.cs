namespace Mistweaver.Data.SpellModels
{
    public class SoothingMist : HealBase
    {
        public SoothingMist()
        {
            
            SpellId = 115175;
            Name = SpellNames.SoothingMist;
            Coefficient = 616m;
            ManaCost = 0.032m;
            MaxTargets = 1;
            CastTime = 8;
            MasteryTrigger = true;
            IsChannel = true;
            HotInfoId = (int)HotIds.SoothingMist;
            HotInfo = new HotInfo()
            {
                Id = (int)this.HotInfoId,
                Name = this.Name,
                Duration = 8,
                TickRate = 1,
                SpellBaseId = this.Id,
                IsExtendable = false
            };
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = true,
                Mastery = false,
                Versatility = true
            };
        }
    }
    public class SoothingMist_Jss : HealBase
    {
        public SoothingMist_Jss()
        {
            Name = SpellNames.SoothingMist_Jss;
            Coefficient = 308m;
            MaxTargets = 1;
            CastTime = 8;
            IsIndirect = true;
            HotInfoId = (int)HotIds.SoothingMist_Jss;
            HotInfo = new HotInfo()
            {
                Id = (int)this.HotInfoId,
                Name = this.Name,
                Duration = 8,
                TickRate = 1,
                IsExtendable = false,
                SpellBaseId = this.Id,
            };
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = true,
                Mastery = false,
                Versatility = true
            };
        }
    }
}
