namespace MathematicalMistweaving.API.Models
{
    public class EssenceFontDto : BaseSpellDto
    {
        public EssenceFontDto()
        {
            Id = 3;
            Name = "Essence Font";
            ManaCost = .072m;
            Cooldown = 12m;
            Coefficient = TotalEssenceFontCoefficient();
            HotInfoId = 3;
            HotInfo = new HotInfo
            {
                Id = 3,
                Duration = 8,
                TickRate = 2,
                SpellBaseId = 3,
            };
        }

        public class EssenceFontHit : BaseSpellDto
        {
            public EssenceFontHit()
            {
                Coefficient = 40.356m;
                MaxTargets = 18;
                MasteryTrigger = false;
            }
        }

        public class EssenceFontHot : BaseSpellDto
        {
            public EssenceFontHot()
            {
                Coefficient = 15.12m;
                MaxTargets = 18;
                MasteryTrigger = false;
                
            }
        }

        public decimal TotalEssenceFontCoefficient()
        {
            var spells = new List<BaseSpellDto> {
                new EssenceFontHit(),
                new EssenceFontHot(),
            };
            return GetTotalCoefficient(spells);
        }
    }

}
