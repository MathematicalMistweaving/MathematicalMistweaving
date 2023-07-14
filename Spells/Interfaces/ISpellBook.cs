
namespace Mistweaver.SpellData.Interfaces
{
    public interface ISpellBook
    {
        List<SpellBase> Spells { get; }
        List<HealBase> HealingSpells { get; }
        List<DamageBase> DamageSpells { get; }
        List<HotInfo> Hots { get; }
        List<DotInfo> Dots { get; }
    }
}
