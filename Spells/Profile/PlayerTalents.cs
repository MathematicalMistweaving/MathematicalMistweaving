using Mistweaver.Data.Talents.Base;

namespace Mistweaver.Data.Profile
{
    public class PlayerTalents
    {
        public PlayerTalents() { SelectedTalents = new List<SelectedTalent>(); }
        public PlayerTalents(List<SelectedTalent> selectedTalents) 
        {
            this.SelectedTalents = selectedTalents;
        }
        public List<SelectedTalent> SelectedTalents { get; set; }
    }
}
