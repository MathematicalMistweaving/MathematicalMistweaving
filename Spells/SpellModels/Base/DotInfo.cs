using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels.Base
{
    public class DotInfo
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        /**Spell Duration in Seconds**/
        public decimal Duration { get; set; }
        /**Frequency of Hot Tick in Seconds**/
        public decimal TickRate { get; set; }

        public int SpellBaseId { get; set; }
        //public virtual SpellBase SpellBase { get; set; } = new SpellBase();

    }
}
