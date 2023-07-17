using Mistweaver.Data.Helpers;
using Mistweaver.Data.Interfaces;
using Mistweaver.Data.Profile;
using Mistweaver.Data.SpellModels;
using Mistweaver.Data.Talents.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.Data.Talents
{
    public class CloudedFocus : TalentBase
    {
        public CloudedFocus()
        {
            
            Name = TalentNames.CloudedFocus;
            Tier = TalentTier.Tier2;
            MaxRank = 1;
            HasUniqueEffect = true;
            Ranks = new List<TalentRankData>()
            {
                new TalentRankData()
                {
                    Rank = 1,
                    Effects =
                    {
                        new TalentEffect()
                        {
                            Type = TalentEffectTypes.Coefficient,
                            Value = 0.20m
                        }
                    }
                }
            };
        }

        public override decimal CalculateUniqueEffect<T>()
        {
            ////TODO: Implement

            return 1;
            
            //throw new NotImplementedException();
        }
    }
}
