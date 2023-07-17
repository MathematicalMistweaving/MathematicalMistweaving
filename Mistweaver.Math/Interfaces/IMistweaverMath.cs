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
        public SpellResult GetSpellWithModifiers(string name);

        public void ModifyProperties<T, U>() where U : TalentBase;
    }
}
