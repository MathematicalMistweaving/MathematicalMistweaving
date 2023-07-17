﻿using Mistweaver.Math.Interfaces;
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
        public void TalentBase_CalculateUniqueEffect_Implemented()
        {
            CloudedFocus cf = new CloudedFocus();
            Assert.AreEqual(1, _math?.CalculateUniqueEffect<Vivify.VivifyPrimary>());
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void InheritedClass_ModifyProperties_Abstraction_Implemented()
        {
            var bok = _spellBook.BlackoutKick();
            _math?.ModifyProperties<BlackoutKick, AncientConcordance>();
            Assert.AreEqual(3, bok?.MaxTargets);
        }

        [TestMethod]
        public void TalentBase_VirtualBaseMethod_Implemented()
        {
            var viv = _spellBook.Vivify();
            _math?.ModifyProperties<Vivify, ImprovedVivify>();
            Assert.AreEqual((decimal)141m*1.2m, viv?.Coefficient);
        }
    }
}
