using Mistweaver.Data.Common;
using Mistweaver.Data.Helpers;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Profile;
using Mistweaver.Data.Talents;
using Mistweaver.Data.Talents.Base;
using Mistweaver.Math.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Math.Models
{
    public class MistweaverMath : IMistweaverMath
    {
        private readonly ISpellBook _spellBook;
        private readonly IProfile _profile;
        public MistweaverMath(ISpellBook spellBook, IProfile profile) 
        {
            _spellBook = spellBook;
            _profile = profile;
        }

        //this should go in the application layer and call _math.modify...
        public void ApplyPlayerTalents()
        {
            if (_profile.PlayerTalents.SelectedTalents.Count > 0)
            {
                foreach (SelectedTalent talent in _profile.PlayerTalents.SelectedTalents)  // _profile.PlayerTalents.Talents will be a collection from the front end that only contains a single talent rank data for each talent based on what was selected
                {
                    
                    foreach (var affectedSpell in talent.AffectedHeals)
                    {
                        ModifyHealProperties(_spellBook.GetHeal(affectedSpell), talent);
                    }
                    foreach (var affectedSpell in talent.AffectedDamages)
                    {
                        ModifyDamageProperties(_spellBook.GetDamage(affectedSpell), talent);
                    }
                    //TODO: apply talents that affect other talents i.e. ancient concordance making teachings of the monastery 20/25% reset chance instead of 15%
                }
            }
        }

        public decimal GetStatPercent(int statRating, string statName)
        {
            //calculate stat DR
            var ratingPerPercent = GetStatPointPerPercent(statName);
            return CalculateStatDiminishingReturns(statRating, ratingPerPercent) + GetBaseStat(statName);
        }

        public virtual decimal CalculateUniqueEffect<T>()
        {
            throw new NotImplementedException();
        }
        public void ModifyHealProperties(HealBase spell, SelectedTalent talent)
        {
            throw new NotImplementedException();


        }

        public void ModifyDamageProperties(DamageBase spell, SelectedTalent talent)
        {
            throw new NotImplementedException();
        }
        
        public decimal CalculateModifiedCoefficient(SpellBase spell, TalentEffect talent)
        {
            if (talent.Type != TalentEffectTypes.Coefficient)
                return spell.Coefficient * (1 + talent.Value);

            else
                throw new Exception("Talent does not modify coefficient");
        }

        public void ApplyStatScaling(SpellBase spell)
        {
            throw new NotImplementedException();
        }

        private decimal CalculateStatDiminishingReturns(int rating, int ratingPerPercent)
        {
            double[] statTiers = { 30, 39, 47, 54, 66 };
            var initial = rating/ ratingPerPercent;
            var result = 0m;
            if(initial > 30)
            {
                //do DR Things 
            }
            else
            {
                result = initial;
            }
            return result;
        }

        private int GetStatPointPerPercent(string name)
        {
            switch (name) 
            {
                case Stats.Crit:
                case Stats.Mastery:
                    return 180;
                case Stats.Haste:
                    return 170;
                case Stats.Vers:
                    return 205;
                case Stats.Leech:
                    return 148;
                default:
                    return -1;
            }
        }

        private decimal GetBaseStat(string name)
        {
            switch (name)
            {
                case Stats.Crit:
                    return 5.00m;
                case Stats.Mastery:
                    return 33.60m;
                case Stats.Haste:
                    return 0m; ;
                case Stats.Vers:
                    return 0m; ;
                case Stats.Leech:
                    return 0m; ;
                default:
                    return -1;
            }
        }

    }
}