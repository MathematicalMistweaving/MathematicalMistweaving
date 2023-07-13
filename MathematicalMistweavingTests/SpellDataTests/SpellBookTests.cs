using Mistweaver.SpellData;
using Mistweaver.SpellData.SpellModels;

namespace MathematicalMistweavingTests.SpellDataTests
{
    [TestClass]
    public class SpellBookTests
    {
        SpellBook _spellBook;
        [TestInitialize]
        public void Setup()
        {
            _spellBook = new SpellBook();
        }

        [TestMethod]
        public void SpellBookReturns_UsableSpells_Vivify()
        {
            var vivify = _spellBook.Vivify();
            Assert.AreEqual(116670, vivify?.SpellId);
        }

        [TestMethod]
        public void SpellBookReturns_UsableSpells_RisingSunKick()
        {
            var rsk = _spellBook.RisingSunKick();
            Assert.AreEqual(107428, rsk?.SpellId);
        }

        [TestMethod]
        public void SpellBook_TigerPalm()
        {
            var retVal = _spellBook.TigerPalm();
            Assert.AreEqual(typeof(DamageBase), retVal.GetType());
        }

        [TestMethod]
        public void SpellBookworks_Generics_Implemented()
        {
            var sg = _spellBook.SheilunsGift();
            var cbd = _spellBook.ChiBurst(damage: true);
            var cbh = _spellBook.ChiBurst();
            var ccchiji = _spellBook.ChiCocoon(chiji: true);
            var ccyulon = _spellBook.ChiCocoon(yulon: true);
            var bok = _spellBook.BlackoutKick();

            Assert.AreEqual(typeof(DamageBase), cbd.GetType());
            Assert.AreEqual(typeof(HealBase), cbh.GetType());

        }
    }
}
