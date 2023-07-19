using Mistweaver.Data.Talents;
using Mistweaver.Data.Talents.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
