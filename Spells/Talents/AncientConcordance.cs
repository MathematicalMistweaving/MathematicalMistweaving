using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Talents.Base;

namespace Mistweaver.Data.Talents
{
    public class AncientConcordance : TalentBase
    {
        public AncientConcordance(ISpellBook spellBook, IProfile profile) : base(spellBook, profile)
        {
            Name = TalentNames.AncientConcordance;
            Tier = TalentTier.Tier3;
            AffectedSpells = new List<string> { SpellNames.BlackoutKick, TalentNames.TeachingsOfTheMonastery };
            MaxRank = 2;
            Ranks = new List<TalentRankData>()
            {
                new TalentRankData() 
                { 
                    Rank = 1, 
                    Effects = new List<TalentEffect>()
                    {
                        new TalentEffect() { Type = TalentEffectTypes.Targets, Spells = new List<string> {SpellNames.BlackoutKick }, Value = 2 },
                        new TalentEffect() { Type = TalentEffectTypes.ProcChance, Spells = new List<string> {TalentNames.TeachingsOfTheMonastery }, Value = .05m }
                    },
                    
                },
                new TalentRankData() 
                { 
                    Rank = 2,
                    Effects = new List<TalentEffect>()
                    {
                        new TalentEffect() { Type = TalentEffectTypes.Targets, Spells = new List<string> {SpellNames.BlackoutKick }, Value = 3 },
                        new TalentEffect() { Type = TalentEffectTypes.ProcChance, Spells = new List<string> {TalentNames.TeachingsOfTheMonastery }, Value = .10m }
                    },
                }
            };
        } 
        
        public override void ModifyProperties<T, U>(T spell)
        {
            //base.ModifyProperties<T, U>(spell);
            //TODO: Implement
            throw new NotImplementedException();
        }

        public override decimal CalculateUniqueEffect<T>()
        {
            if (!HasUniqueEffect) return 0;

            //TODO: Implement
            throw new NotImplementedException();
        }

        public override decimal CalculateHps<T>(ISpellBook spellBook, IProfile profile)
        {
            //TODO: Implement
            throw new NotImplementedException();
        }
    }
}
