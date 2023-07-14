using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels.Base
{
    public class DamageBase : SpellBase
    {
        public int? DotInfoId { get; set; }
        public virtual DotInfo? DotInfo { get; set; }
    }
}
