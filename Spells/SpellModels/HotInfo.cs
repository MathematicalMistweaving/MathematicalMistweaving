using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels
{
    public class HotInfo
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        /**Spell Duration in Seconds**/
        public decimal Duration { get; set; }
        /**Frequency of Hot Tick in Seconds**/
        public decimal TickRate { get; set; }

        public int SpellBaseId { get; set; }
        public bool IsExtendable { get; set; } = true;
        public bool IsPandemic { get; set; } = true;
    }

    public enum HotIds
    {
        RenewingMist = 1,
        EssenceFont = 2,
        EnvelopingMist = 3,
        SoothingMist = 4,
        EnvelopingBreath = 5,
        SoothingBreath = 6,
        EssenceFont_Faelinestomp = 7,
        RefreshingJadeWind = 8,
        SoothingMist_Jss = 9,
    }
}
