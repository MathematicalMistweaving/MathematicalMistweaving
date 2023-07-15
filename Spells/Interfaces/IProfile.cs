using Mistweaver.SpellData.Profile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.Interfaces
{
    public interface IProfile
    {
        public PlayerStats Stats { get; }
        public PlayerExternalMana Mana { get; }
    }
}
