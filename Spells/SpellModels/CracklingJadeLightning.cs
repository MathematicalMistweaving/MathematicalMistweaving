namespace Mistweaver.Data.SpellModels
{
    public class CracklingJadeLightning : DamageBase
    {
        public CracklingJadeLightning() 
        {
            Type = AbilityType.Nature;
            SpellId = 117952;
            Name = SpellNames.CracklingJadeLightning;
            Coefficient = 22.4m;
            CastTime = 4;
            IsChannel = true;
            IsAttackPower = true;
            MaxTargets = 1;
            DotInfoId = (int)DotIds.CracklingJadeLightning;
            DotInfo = new DotInfo()
            {
                Id = (int)this.DotInfoId,
                Name = this.Name,
                Duration = 4,
                TickRate = 1,
                TickRateHasted = true,
                SpellBaseId = this.Id
            };
            StatScaling = new StatScaling()
            {
                CriticalStrike = true,
                Haste = false,
                Mastery = false,
                Versatility = true,
            };
        }
    }
}
