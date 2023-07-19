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
        public void ApplyPlayerTalents();
        public SpellResult GetSpellWithModifiers(string name);


        public void ModifyHealProperties(HealBase spell, SelectedTalent talent);

        public void ModifyDamageProperties(DamageBase spell, SelectedTalent talent);

        public PlayerStats
        public void ApplyStatScaling(SpellBase spell);

        public decimal CalculateUniqueEffect<T>();
    }
}
