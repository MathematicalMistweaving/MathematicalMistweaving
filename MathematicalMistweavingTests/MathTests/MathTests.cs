using Mistweaver.Math.Interfaces;
using Mistweaver.Math.Models;
using Mistweaver.SpellData;
using Mistweaver.SpellData.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathematicalMistweavingTests.MathTests
{
    [TestClass]
    public class MathTests
    {
        ISpellBook _spellBook = new SpellBook();
        IMistweaverMath _math = new MistweaverMath();

        [TestMethod]
        public void MathInterface_Returns_Valid()
        {
            var result = _math.GetSpellWithModifiers("is this");
            Assert.AreEqual("is this is valid", result.validResponse);
        }
    }
}
