using Mistweaver.Data.Profile;

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
