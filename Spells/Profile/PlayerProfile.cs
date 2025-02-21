using Mistweaver.Data.Interfaces;

namespace Mistweaver.Data.Profile
{
    public class PlayerProfile : IProfile
    {
        public PlayerStats Stats { get; set; } = new PlayerStats();
        public PlayerTalents PlayerTalents { get; set; } = new PlayerTalents();
        public PlayerExternalMana ExternalMana { get; set; } = new PlayerExternalMana();
        public ProfileOptions Options { get; set; } = new ProfileOptions();

    }
}
