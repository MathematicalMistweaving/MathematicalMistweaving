using Mistweaver.Data.Talents.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Interfaces
{
    public interface ITalent
    {
        public decimal CalculateUniqueEffect<T>();

        public decimal CalculateHps<T>();
        public void ModifyProperties<T>(T spell);

    }
}
