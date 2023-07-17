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

        [TestMethod]
        public void MathInterface_Returns_Valid()
        {
            var result = _math?.GetSpellWithModifiers("is this");
            Assert.AreEqual("is this is valid", result?.validResponse);
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void Math_ModifyDamageProperties_Abstraction_Implemented()
        {
            var ac = new AncientConcordance();
            var bok = _spellBook?.BlackoutKick();
            _math?.ModifyDamageProperties(bok, ac);
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void Math_ModifyHealProperties_Abstraction_Implemented()
        {
            var improvedViv = new ImprovedVivify();
            var viv = _spellBook?.Vivify();
            _math?.ModifyHealProperties(viv, improvedViv);
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
