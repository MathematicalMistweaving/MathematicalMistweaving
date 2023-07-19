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
    public class HotInfoTests
    {
        ISpellBook _spellBook = new SpellBook();

        [TestMethod]
        public void HotInfo_ModifyDuration()
        {
            var rem = _spellBook.RenewingMist();
            decimal rapidDiffusionDuration = 6m;
            rem.HotInfo.ModifyDuration(rapidDiffusionDuration);
            Assert.AreEqual(6m, rem.HotInfo.Duration);
        }

        [TestMethod]
        public void HotInfo_AddDuration()
        {
            var env = _spellBook.EnvelopingMist();
            decimal mistwrap = 1m;
            env?.HotInfo?.AddDuration(mistwrap);
            Assert.AreEqual(7m, env.HotInfo.Duration);
        }

        [TestMethod]
        public void HotInfo_HastedTickRate()
        {
            var envB = _spellBook.EnvelopingBreath();
            decimal hastedTickRate = envB.HotInfo.HastedTickRate(1.25m);
            Assert.AreEqual(1m / 1.25m, hastedTickRate);
        }

        [TestMethod]
        public void HotInfo_HastedDuration()
        {
            var rjw = _spellBook.RefreshingJadeWind();
            decimal hastedDuration = rjw.HotInfo.HastedDuration(rjw, 1.25m);
            Assert.AreEqual(15m / 1.25m, hastedDuration);
        }
    }
}
