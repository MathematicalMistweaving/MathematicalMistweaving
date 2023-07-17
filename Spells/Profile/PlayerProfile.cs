using Mistweaver.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Profile
{
    public class PlayerProfile : IProfile
    {
        public PlayerStats Stats { get; set; } = new PlayerStats();
        public PlayerTalents Talents { get; set; } = new PlayerTalents();
        public PlayerExternalMana ExternalMana { get; set; } = new PlayerExternalMana();
        public ProfileOptions Options { get; set; } = new ProfileOptions();

    }
}
