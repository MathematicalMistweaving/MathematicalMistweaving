using Mistweaver.SpellData;
using Mistweaver.SpellData.SpellModels;

namespace MathematicalMistweavingTests.SpellDataTests
{
    [TestClass]
    public class SpellBookTests
    {
        [TestMethod]
        public void SpellBookReturns_UsableSpells_Vivify()
        {
            SpellBook spells = new SpellBook();

            var vivify = spells.Vivify();
            Assert.AreEqual(116670, vivify?.SpellId);
        }

        [TestMethod]
        public void SpellBookReturns_UsableSpells_RisingSunKick()
        {
            SpellBook spells = new SpellBook();

            var rsk = spells.RisingSunKick();
            Assert.AreEqual(107428, rsk?.SpellId);
        }
    }
}
