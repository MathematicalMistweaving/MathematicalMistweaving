
namespace Mistweaver.Data.Interfaces
{
    public interface ISpellBook
    {
        #region Properties
        List<SpellBase> Spells { get; }
        List<HealBase> HealingSpells { get; }
        List<DamageBase> DamageSpells { get; }
        List<HotInfo> Hots { get; }
        List<DotInfo> Dots { get; }
        #endregion

        #region Heal Fetches
        public HealBase? GetHeal(string name);
        public HealBase? Vivify(bool cleave = false);
        public HealBase? RenewingMist();
        public HealBase? EssenceFont(bool hot = false);
        public HealBase? Revival(string activeTalent = "");
        public HealBase? EnvelopingMist();
        public HealBase? SoothingMist(bool jadeSerpentStatue = false);
        public HealBase? EnvelopingBreath();
        public HealBase? ChiCocoon(string activeTalent = "");
        public HealBase? LifeCocoon();
        public HealBase? SoothingBreath();
        public HealBase? GustOfMists(bool chiji = false);
        public HealBase? SheilunsGift();
        public HealBase? RefreshingJadeWind();
        public HealBase? SummonJadeSerpentStatue();

        public HealBase? FaelineStomp_EF(bool hot = false);
        public HealBase? YulonsWhisper();
        public HealBase? RisingMist();
        public HealBase? HealingElixir();

        #endregion


        #region Damage Fetches
        public DamageBase? GetDamage(string name);
        public DamageBase? RisingSunKick();
        public DamageBase? BlackoutKick();
        public DamageBase? TigerPalm();
        public DamageBase? SpinningCraneKick();
        public DamageBase? TouchOfDeath();
        public DamageBase? CracklingJadeLightning();
        public DamageBase? ResonantFists();
        #endregion

        #region Hybrid Fetches
        public object ChiBurst(bool damage = false);
        public object ChiWave(bool damage = false);
        public object FaelineStomp(bool damage = false);
        public object EyeOfTheTiger(bool damage = false);
        #endregion
    }
}
