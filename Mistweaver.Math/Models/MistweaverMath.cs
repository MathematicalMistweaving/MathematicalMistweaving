using Mistweaver.Math.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Math.Models
{
    public class MistweaverMath : IMistweaverMath
    {
        public MistweaverMath() { }
        public SpellResult GetSpellWithModifiers(string name)
        {
            var result = name + " is valid";
            return new SpellResult() { validResponse = result } ;
        }
    }
}
