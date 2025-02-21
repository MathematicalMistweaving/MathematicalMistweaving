using Mistweaver.Data.Profile;
using Mistweaver.Data.Talents.Base;
using Mistweaver.Math.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Math.Interfaces
{
    public interface IMistweaverMath
    {
        void ApplyPlayerTalents();

        decimal GetStatPercent(int statRating, string statName);

       
        void ApplyStatScaling(SpellBase spell);

        decimal CalculateUniqueEffect<T>();
    }
}
