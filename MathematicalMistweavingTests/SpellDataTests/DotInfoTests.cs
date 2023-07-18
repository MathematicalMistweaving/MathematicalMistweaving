using Mistweaver.Data;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.SpellModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MathematicalMistweavingTests.SpellDataTests
{
    [TestClass]
    public class DotInfoTests
    {
        ISpellBook _spellBook = new SpellBook();

        [TestMethod]
        public void DotInfo_ModifyDuration()
        {
            var eotT = (DamageBase)_spellBook.EyeOfTheTiger(damage: true);
            decimal pandemic = 8m * 1.3m;
            eotT.DotInfo.ModifyDuration(pandemic);
            Assert.AreEqual(pandemic, eotT.DotInfo.Duration);
        }

        [TestMethod]
        public void DotInfo_HastedTickRate()
        {
            var cjl = _spellBook.CracklingJadeLightning();
            decimal hastedTickRate = cjl.DotInfo.HastedTickRate(1.25m);
            Assert.AreEqual(1m / 1.25m, hastedTickRate);
        }
    }
}
