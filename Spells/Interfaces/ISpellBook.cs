using Mistweaver.SpellData.SpellModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
