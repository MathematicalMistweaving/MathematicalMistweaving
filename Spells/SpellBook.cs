using Mistweaver.SpellData.Interfaces;
using Mistweaver.SpellData.SpellModels;


namespace Mistweaver.SpellData
{
    public class SpellBook : ISpellBook
    {
        #region Properties
        public List<SpellBase> Spells { get; set; } = new List<SpellBase>();
        public List<HealBase> HealingSpells { get; set; } = new List<HealBase>();
        public List<DamageBase> DamageSpells { get; set; } = new List<DamageBase>();
        public List<HotInfo> Hots { get; set; } = new List<HotInfo>();
        public List<DotInfo> Dots { get; set; } = new List<DotInfo>();
        #endregion

        #region Heal Fetch Methods

        public HealBase? Vivify(bool cleave = false) => cleave ? GetSpellByName<HealBase>(SpellNames.VivifyCleave) : GetSpellByName<HealBase>(SpellNames.Vivify);
        public HealBase? RenewingMist() => GetSpellByName<HealBase>(SpellNames.RenewingMist);
        public HealBase? EssenceFont(bool hot = false) => hot ? GetSpellByName<HealBase>(SpellNames.EssenceFontHoT) : GetSpellByName<HealBase>(SpellNames.EssenceFont);
        public HealBase? Revival(string activeTalent = "") => (activeTalent == "") ? GetSpellByName<HealBase>(SpellNames.Revival) : GetSpellByName<HealBase>(activeTalent);
        public HealBase? EnvelopingMist() => GetSpellByName<HealBase>(SpellNames.EnvelopingMist);
        public HealBase? SoothingMist(bool jadeSerpentStatue = false) => jadeSerpentStatue ? GetSpellByName<HealBase>(SpellNames.SoothingMist_Jss) : GetSpellByName<HealBase>(SpellNames.SoothingMist);
        public HealBase? EnvelopingBreath() => GetSpellByName<HealBase>(SpellNames.EnvelopingBreath);
        public HealBase? ChiCocoon(string activeTalent = "") => (activeTalent == "") ? GetSpellByName<HealBase>(SpellNames.ChiCocoon_Yulon) : GetSpellByName<HealBase>(activeTalent);
        public HealBase? LifeCocoon() => GetSpellByName<HealBase>(SpellNames.LifeCocoon);
        public HealBase? SoothingBreath() => GetSpellByName<HealBase>(SpellNames.SoothingBreath);
        public HealBase? GustOfMists(bool chiji = false) => chiji ? GetSpellByName<HealBase>(SpellNames.GustofMists_ChiJi) : GetSpellByName<HealBase>(SpellNames.GustOfMists);
        public HealBase? SheilunsGift() => GetSpellByName<HealBase>(SpellNames.SheilunsGift);
        public HealBase? RefreshingJadeWind() => GetSpellByName<HealBase>(SpellNames.RefreshingJadeWind);
        public HealBase? SummonJadeSerpentStatue() => GetSpellByName<HealBase>(SpellNames.SummonJadeSerpentStatue);
        public HealBase? Unison() => GetSpellByName<HealBase>(SpellNames.Unison);

        #endregion

        #region Damage Fetch Methods

        public DamageBase? RisingSunKick() => GetSpellByName<DamageBase>(SpellNames.RisingSunKick);
        public DamageBase? BlackoutKick() => GetSpellByName<DamageBase>(SpellNames.BlackoutKick);
        public DamageBase? TigerPalm() => GetSpellByName<DamageBase>(SpellNames.TigerPalm);
        public DamageBase? SpinningCraneKick() => GetSpellByName<DamageBase>(SpellNames.SpinningCraneKick);
        public DamageBase? TouchOfDeath() => GetSpellByName<DamageBase>(SpellNames.TouchOfDeath);

        #endregion

        /* hyrids */
        public object ChiBurst(bool damage = false)
        {
            if (damage)
                return GetSpellById<DamageBase>(148135);

            return GetSpellById<HealBase>(130654);
        }
        public object ChiWave(bool damage = false)
        {
            if (damage)
                return GetSpellById<DamageBase>(115098);

            return GetSpellById<HealBase>(132463);
        }


        public SpellBook()
        {
            HealingSpells = new List<HealBase> {
                new Vivify.VivifyPrimary(), 
                new Vivify.VivifyCleave(), 
                new RenewingMist(),
                new EssenceFont.EssenceFontHit(), 
                new EssenceFont.EssenceFontHot(),
                new Revival(),
                new Restoral(),
                new EnvelopingMist(),
                new EnvelopingBreath(),
                new ChiCocoon.ChiCocoonChiJi(),
                new ChiCocoon.ChiCocoonYulon(),
                new SoothingMist(),
                new SoothingMist_Jss(),
                new RefreshingJadeWind(),
                new LifeCocoon(),

      
                
                new HealBase { SpellId = 343737, Name = "Soothing Breath", Coefficient = 105, MaxTargets = 3, MasteryTrigger = false, Cooldown = 1.5m, CastTime = 4.5m, IsIndirect = true, HotInfoId = (int)HotIds.SoothingBreath, HotInfo = Hots.Where(x => x.Id == (int)HotIds.SoothingBreath).FirstOrDefault() },
                new HealBase { SpellId = 343819, Name = "Gust of Mists (Chi-Ji)", Coefficient = 33.6m, MaxTargets = 2, CastTime = 0, MasteryTrigger = true, IsIndirect = true },
                new HealBase { SpellId = 191894, Name = "Gust of Mists", Coefficient = 33.6m, MaxTargets = 1, IsIndirect = true, CastTime = 0, },
                new HealBase { SpellId = 399491, Name = "Sheilun's Gift", Coefficient = 114, MaxTargets = 3, CastTime = 2, Cooldown = 8, ManaCost = 0.025m },
                
                new HealBase { SpellId = 115313, Name = "Summon Jade Serpent Statue", Coefficient = 0, CastTime = 1.5m, MaxTargets = 1},
                
                new HealBase { SpellId = 130654, Name = "Chi Burst", Coefficient = 94.5m, CastTime = 0.75m, MaxTargets = 6, IsSqrtScaling = true, IsAttackPower = true, Cooldown = 30, },
                new HealBase { SpellId = 132463, Name = "Chi Wave", Coefficient = 42, CastTime = 1.5m, MaxTargets = 4, IsAttackPower = true, Cooldown = 15 },
                new HealBase { SpellId = 388480, Name = "Unison", Coefficient = 100, CastTime = 0, MaxTargets = 1, IsIndirect = true }

            };

            DamageSpells = new List<DamageBase> {
                new DamageBase { SpellId = 107428, Name = "Rising Sun Kick", Coefficient = 143.8m, ManaCost = .02m, MaxTargets = 1, CastTime = 1.5m, Cooldown = 12, IsCooldownHasted = true, IsAttackPower = true },
                new DamageBase { SpellId = 100784, Name = "Blackout Kick", Coefficient = 84.7m, MaxTargets = 1, CastTime = 1.5m, Cooldown = 3, IsCooldownHasted = true, IsAttackPower = true },
                new DamageBase { SpellId = 100780, Name = "Tiger Palm", Coefficient = 27.027m, MaxTargets = 1, CastTime = 1.5m, IsAttackPower = true },
                new DamageBase { SpellId = 107270, Name = "Spinning Crane Kick", Coefficient = 40, MaxTargets = 5, CastTime = 1.5m, IsChannel = true, IsAttackPower = true, IsSqrtScaling = true },
                new DamageBase { SpellId = 322109, Name = "Touch of Death", Coefficient = 35, MaxTargets = 1, CastTime = 1.5m, IsHealthCoefficient = true, Cooldown = 180 },
                new DamageBase { SpellId = 148135, Name = "Chi Burst", Coefficient = 46, CastTime = .75m, MaxTargets = 6, IsSqrtScaling = true, Cooldown = 30, IsAttackPower = true },
                new DamageBase { SpellId = 115098, Name = "Chi Wave", Coefficient = 14.2015m, CastTime = 1.5m, MaxTargets = 4, Cooldown = 15, IsAttackPower = true }

                //TODO break out casts that don't do damage
            };
            Spells.AddRange(DamageSpells);
            Spells.AddRange(HealingSpells);
            Spells = Spells.OrderBy(x => x.Id).ToList();

            foreach(var spell in HealingSpells)
            {
                if(spell.HotInfo != null)
                {
                    Hots.Add(spell.HotInfo);
                }
            }

            foreach(var spell in DamageSpells)
            {
                if(spell.DotInfo != null)
                {
                    Dots.Add(spell.DotInfo);
                }
            }
        }

        public T GetSpellById<T>(int spellId)
        {
            if (GetType() == typeof(HealBase))
                return (T)(object)HealingSpells.Where(x => x.SpellId == spellId).First();

            if (GetType() == typeof(DamageBase))
                return (T)(object)DamageSpells.Where(x => x.SpellId == spellId).First();

            return (T)(object)Spells.Where(x => x.SpellId == spellId).First();
        }

        public T GetSpellByName<T>(string name)
        {
            if(GetType() == typeof(HealBase))
                return (T)(object)HealingSpells.Where(x => x.Name == name).First();

            if(GetType() == typeof(DamageBase))
                return (T)(object)DamageSpells.Where(x => x.Name == name).First();

            return (T)(object)Spells.Where(x => x.Name == name).First();

        }

        public void AddSourceIds(List<SpellBase> spells)
        {
            
        }
    }
}
