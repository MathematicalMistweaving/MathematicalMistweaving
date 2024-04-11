using Mistweaver.Math.Interfaces;
using Mistweaver.Math.Models;
using Mistweaver.Data;
using Mistweaver.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.Data.Profile;
using Mistweaver.Data.Talents;
using Mistweaver.Data.SpellModels;
using Mistweaver.Data.Common;
using Mistweaver.Data.Talents.Base;

namespace MathematicalMistweavingTests.MathTests
{
    [TestClass]
    public class MistweaverMathTests
    {
        ISpellBook? _spellBook;
        IMistweaverMath? _math;
        IProfile? _profile;

        [TestInitialize]
        public void Setup()
        {
            _spellBook = new SpellBook();
            _profile = new PlayerProfile();
            _math = new MistweaverMath(_spellBook, _profile);
        }
        #region Stat Diminishing Return Tests

        #region Crit
        [TestMethod]
        public void StatDR_Crit_30()
        {
            var result = _math?.GetStatPercent(5400, "Crit");
            Assert.AreEqual(35.00m, result);
        }

        [TestMethod]
        public void StatDR_Crit_39()
        {
            var result = _math?.GetStatPercent(5833, "Crit");
            Assert.AreEqual(37.16m, result);
        }

        [TestMethod]
        public void StatDR_Crit_47()
        {
            var result = _math?.GetStatPercent(8500, "Crit");
            Assert.AreEqual(50.07m, result);
        }

        [TestMethod]
        public void StatDR_Crit_54()
        {
            var result = _math?.GetStatPercent(12000, "Crit");
            Assert.AreEqual(64.60m, result);
        }
        #endregion

        #region Haste
        [TestMethod]
        public void StatDR_Haste_30()
        {
            var result = _math?.GetStatPercent(5100, "Haste");
            Assert.AreEqual(30.00m, result);
        }

        [TestMethod]
        public void StatDR_Haste_39()
        {
            var result = _math?.GetStatPercent(5833, "Haste");
            Assert.AreEqual(33.88m, result);
        }

        [TestMethod]
        public void StatDR_Haste_47()
        {
            var result = _math?.GetStatPercent(8500, "Haste");
            Assert.AreEqual(47.29m, result);
        }

        [TestMethod]
        public void StatDR_Haste_54()
        {
            var result = _math?.GetStatPercent(11000, "Haste");
            Assert.AreEqual(58.22m, result);
        }
        #endregion

        #region Mastery
        [TestMethod]
        public void StatDR_Mastery_30()
        {
            var result = _math?.GetStatPercent(5400, "Mastery");
            Assert.AreEqual(159.60m, result);
        }

        [TestMethod]
        public void StatDR_Mastery_39()
        {
            var result = _math?.GetStatPercent(5833, "Mastery");
            Assert.AreEqual(168.69m, result);
        }

        [TestMethod]
        public void StatDR_Mastery_47()
        {
            var result = _math?.GetStatPercent(8500, "Mastery");
            Assert.AreEqual(222.88m, result);
        }

        [TestMethod]
        public void StatDR_Mastery_54()
        {
            var result = _math?.GetStatPercent(12000, "Mastery");
            Assert.AreEqual(283.91m, result);
        }
        #endregion

        #region Versatility
        [TestMethod]
        public void StatDR_Vers_30()
        {
            var result = _math?.GetStatPercent(6150, "Vers");
            Assert.AreEqual(30.00m, result);
        }

        [TestMethod]
        public void StatDR_Vers_39()
        {
            var result = _math?.GetStatPercent(7500, "Vers");
            Assert.AreEqual(35.93m, result);
        }

        [TestMethod]
        public void StatDR_Vers_47()
        {
            var result = _math?.GetStatPercent(10000, "Vers");
            Assert.AreEqual(46.31m, result);
        }

        [TestMethod]
        public void StatDR_Vers_54()
        {
            var result = _math?.GetStatPercent(12000, "Vers");
            Assert.AreEqual(53.91m, result);
        }
        #endregion


        #region Leech
        [TestMethod]
        public void StatDR_Leech_10()
        {
            var result = _math?.GetStatPercent(1500, "Leech");
            Assert.AreEqual(10.12m, result);
        }
        #endregion
        #endregion

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void Math_ModifyDamageProperties_Abstraction_Implemented()
        {
            var ac = new AncientConcordance();
            var acRank = new SelectedTalent(ac, 1);
            var bok = _spellBook?.BlackoutKick();
            //_math?.ModifyDamageProperties(bok, acRank);
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void Math_ModifyHealProperties_Abstraction_Implemented()
        {
            var improvedViv = new ImprovedVivify();
            var ivRank = new SelectedTalent(improvedViv, 2); 
            var viv = _spellBook?.Vivify();
            //_math?.ModifyHealProperties(viv, ivRank);
        }

        [TestMethod]
        public void Math_ModifyProperties_Abstraction_Implemented()
        {
            try
            {
                _math?.ApplyPlayerTalents();
                return;
            }
            catch(Exception ex)
            {
                Assert.Fail(ex.Message);
            }
        }

    }
}
