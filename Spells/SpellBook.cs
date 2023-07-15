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
        public HealBase? SummonJadeSerpentStatue() => GetSpellByName<HealBase>(TalentNames.SummonJadeSerpentStatue);
        public HealBase? FaelineStomp_EF(bool hot = false) => hot ? GetSpellByName<HealBase>(SpellNames.EssenceFont_FLS_HoT) : GetSpellByName<HealBase>(SpellNames.EssenceFont_FLS);
        public HealBase? YulonsWhisper() => GetSpellByName<HealBase>(SpellNames.YulonsWhisper);
        public HealBase? RisingMist() => GetSpellByName<HealBase>(TalentNames.RisingMist);
        public HealBase? HealingElixir() => GetSpellByName<HealBase>(TalentNames.HealingElixir);
        #endregion

        #region Damage Fetch Methods

        public DamageBase? RisingSunKick() => GetSpellByName<DamageBase>(SpellNames.RisingSunKick);
        public DamageBase? BlackoutKick() => GetSpellByName<DamageBase>(SpellNames.BlackoutKick);
        public DamageBase? TigerPalm() => GetSpellByName<DamageBase>(SpellNames.TigerPalm);
        public DamageBase? SpinningCraneKick() => GetSpellByName<DamageBase>(SpellNames.SpinningCraneKick);
        public DamageBase? TouchOfDeath() => GetSpellByName<DamageBase>(SpellNames.TouchOfDeath);
        public DamageBase? CracklingJadeLightning() => GetSpellByName<DamageBase>(SpellNames.CracklingJadeLightning);
        public DamageBase? ResonantFists() => GetSpellByName<DamageBase>(TalentNames.ResonantFists);

        #endregion

        /* hyrids */
        public object ChiBurst(bool damage = false)
        {
            if (damage)
                return GetSpellByName<DamageBase>(SpellNames.ChiBurst);

            return GetSpellByName<HealBase>(SpellNames.ChiBurst);
        }
        public object ChiWave(bool damage = false)
        {
            if (damage)
                return GetSpellByName<DamageBase>(SpellNames.ChiWave);

            return GetSpellByName<HealBase>(SpellNames.ChiWave);
        }
        public object ZenPulse(bool damage = false)
        {
            if (damage)
                return GetSpellByName<DamageBase>(SpellNames.ZenPulse);

            return GetSpellByName<HealBase>(SpellNames.ZenPulse);
        }
        public object FaelineStomp(bool damage = false)
        {
            if (damage)
                return GetSpellByName<DamageBase>(SpellNames.FaelineStomp);

            return GetSpellByName<HealBase>(SpellNames.FaelineStomp);
        }
        public object EyeOfTheTiger(bool damage = false)
        {
            if (damage)
                return GetSpellByName<DamageBase>(TalentNames.EyeOfTheTiger);

            return GetSpellByName<HealBase>(TalentNames.EyeOfTheTiger);
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
                new SoothingBreath(),
                new GustOfMists(),
                new GustsOfMistsChiji(),
                new SheilunsGift(),
                new ChiBurstHeal(),
                new ChiWaveHeal(),
                new ZenPulseHeal(),
                new FaelineStompHeal(),
                new FaelineStompHeal.FaelineStompEssenceFontHit(),
                new FaelineStompHeal.FaelineStompEssenceFontHot(),
                new YulonsWhisper(),
                new RisingMist(),
                new EyeOfTheTigerHeal(),
                new HealingElixir(),

                //TODO: Break out spell casts/Talent effects that don't do healing 
                new HealBase { SpellId = 388480, Name = "Unison", Coefficient = 100, CastTime = 0, MaxTargets = 1, IsIndirect = true },
                new HealBase { SpellId = 115313, Name = "Summon Jade Serpent Statue", Coefficient = 0, CastTime = 1.5m, MaxTargets = 1},
            };

            DamageSpells = new List<DamageBase> {
                new RisingSunKick(),
                new BlackoutKick(),
                new TigerPalm(),
                new SpinningCraneKick(),
                new ChiBurstDmg(),
                new ChiWaveDmg(),
                new TouchOfDeath(),
                new ZenPulseDmg(),
                new FaelineStompDmg(),
                new EyeOfTheTigerDmg(),
                new CracklingJadeLightning(),
                new ResonantFists(),
                
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

        #region Generics
        public T GetSpellById<T>(int spellId) 
        {
            if (typeof(T) == typeof(HealBase))
                return (T)(object)HealingSpells.Where(x => x.SpellId == spellId).First();

            if (typeof(T) == typeof(DamageBase))
                return (T)(object)DamageSpells.Where(x => x.SpellId == spellId).First();

            return (T)(object)Spells.Where(x => x.SpellId == spellId).First();
        }

        public T GetSpellByName<T>(string name)
        {
            if(typeof(T) == typeof(HealBase))
                return (T)(object)HealingSpells.Where(x => x.Name == name).First();

            if(typeof(T) == typeof(DamageBase))
                return (T)(object)DamageSpells.Where(x => x.Name == name).First();

            return (T)(object)Spells.Where(x => x.Name == name).First();
        }
        #endregion

        public void AddSourceIds<T>(List<T> spells)
        {
            
        }
    }
}
