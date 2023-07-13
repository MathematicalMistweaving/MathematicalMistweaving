using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathematicalMistweaving.API.Models
{
    public class RevivalRestoralDto : BaseSpellDto
    {
        public RevivalRestoralDto()
        {
            Id = 4;
            Name = "Revival";//GetActiveTalent();
            Coefficient = 325.45m;
            ManaCost = 0.437m;
            MaxTargets = 20;
            Cooldown = 180;
            MasteryTrigger = true;
        }

        public partial class Revival : RevivalRestoralDto
        {
            public Revival()
            {
                Name = "Revival";
            }
        }
        public partial class Restoral : RevivalRestoralDto
        {
            public Restoral()
            {
                Name = "Restoral";
            }
        }

        public string GetActiveTalent()
        {
            throw new NotImplementedException();
        }
    }


}
