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
        [ExpectedException(typeof(NotImplementedException))]
        public void Math_ModifyDamageProperties_Abstraction_Implemented()
        {
            var ac = new AncientConcordance();
            var acRank = new SelectedTalent(ac, 2);
            var bok = _spellBook?.BlackoutKick();
            _math?.ModifyDamageProperties(bok, acRank);
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void Math_ModifyHealProperties_Abstraction_Implemented()
        {
            var improvedViv = new ImprovedVivify();
            var ivRank = new SelectedTalent(improvedViv, 2); 
            var viv = _spellBook?.Vivify();
            _math?.ModifyHealProperties(viv, ivRank);
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
