using Mistweaver.Math.Models;

namespace Mistweaver.Math.Helpers
{
    public static class StatHelper
    {
        public static decimal ConvertToMultiplier(decimal statPercent)
        {
            return 1 + statPercent;
        }
        public static decimal CalculateStatDiminishingReturns(int rating, Stat statObj)
        {
            decimal percentReductionPerTier = .1m;
            decimal[] secondaryTiers = { 30, 39, 47, 54, 66 };
            decimal[] tertiaryTiers = { 10, 15, 20 };

            var statTiers = (statObj.Type == Data.Common.StatType.Secondary) ? secondaryTiers : tertiaryTiers;
            var ratingTiers = new List<decimal>();
            decimal result = 0m;
            for (int i = 0; i < statTiers.Length; i++)
            {
                ratingTiers.Add(statTiers[i] * statObj.StatPerPercent * (1m + (percentReductionPerTier * i)));
            }

            if (rating <= ratingTiers[0])
            {
                result += rating;
            }
            else
            {
                result += ratingTiers[0];
            }

            for (int i = 0; i < statTiers.Length; i++)
            {

                if (rating > ratingTiers[i])
                {
                    var tierRating = 0m;
                    if (i == statTiers.Length - 1)
                    {
                        tierRating = rating - ratingTiers[i];
                        result += tierRating * (1 - percentReductionPerTier * (i + 1));
                    }
                    else
                    {
                        if (rating > ratingTiers[i + 1])
                        {

                            tierRating = ratingTiers[i + 1] - ratingTiers[i];
                            result += tierRating * (1 - percentReductionPerTier * (i + 1));
                        }
                        else
                        {
                            tierRating = rating - ratingTiers[i];
                            result += tierRating * (1 - percentReductionPerTier * (i + 1));
                        }
                    }
                }
            }
            return decimal.Round((result / statObj.StatPerPercent)*statObj.StatCoefficient, 2);
        }

        public static decimal GetStatPointPerPercent(string name)
        {
            return Stats.All.FirstOrDefault(x => x.Name == name).StatPerPercent;
        }

        public static Stat GetStatByName(string name)
        {
            var stat = Stats.All.FirstOrDefault(x => x.Name == name);
            return (stat == null) ? new Stat() : stat;
        }

        public static decimal GetBaseStat(string name)
        {
            var stat = Stats.All.FirstOrDefault(x => x.Name == name);
            return decimal.Round(stat.Base * stat.StatCoefficient, 2);
        }
    }
}
