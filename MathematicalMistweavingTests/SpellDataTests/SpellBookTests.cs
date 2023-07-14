using Mistweaver.SpellData;
using Mistweaver.SpellData.SpellModels;
using static MathematicalMistweaving.API.Models.RevivalRestoralDto;

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
            var bok = _spellBook.BlackoutKick();

            Assert.AreEqual(typeof(DamageBase), cbd.GetType());
            Assert.AreEqual(typeof(HealBase), cbh.GetType());

        }

        [TestMethod]
        public void SpellBook_Celestial_TalentChoice()
        {
            var ccchiji = _spellBook.ChiCocoon(SpellNames.ChiCocoon_ChiJi);
            var ccyulon = _spellBook.ChiCocoon();
            
            
            Assert.IsNotNull(ccchiji);
            Assert.IsNotNull(ccyulon);
            Assert.AreEqual(406220, ccchiji?.SpellId);
            Assert.AreEqual(406139, ccyulon?.SpellId);

        }


        [TestMethod]
        public void SpellBook_Revival_TalentChoice()
        {
            var revival = _spellBook.Revival();
            var restoral = _spellBook.Revival(SpellNames.Restoral);

            Assert.IsNotNull(revival);
            Assert.IsNotNull(restoral);
            Assert.AreEqual(115310, revival?.SpellId);
            Assert.AreEqual(388615, restoral?.SpellId);
        }
    }
}
