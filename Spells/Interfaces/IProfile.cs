using Mistweaver.Data.Profile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Interfaces
{
    public interface IProfile
    {
        public PlayerStats Stats { get; }
        public PlayerTalents PlayerTalents { get; }
        public PlayerExternalMana ExternalMana { get; }
        public ProfileOptions Options { get; }
    }
}
