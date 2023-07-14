using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Mistweaver.SpellData.SpellModels.Base
{
    public class SpellNames
    {
        #region Heals

        public const string Vivify = "Vivify";
        public const string VivifyCleave = "Vivify Cleave";
        public const string RenewingMist = "Renewing Mist";
        public const string EssenceFont = "Essence Font";
        public const string EssenceFontHoT = "Essence Font (Hot)";
        public const string EssenceFontFLS = "Essence Font (FLS)";
        public const string Revival = "Revival";
        public const string Restoral = "Restoral";
        public const string EnvelopingMist = "Enveloping Mist";
        public const string EnvelopingBreath = "Enveloping Breath";
        public const string SoothingMist = "Soothing Mist";
        public const string SoothingMist_Jss = "Soothing Mist (Jade Serpent Statue)";
        public const string ChiCocoon_ChiJi = "Chi Cocoon (Chi-Ji)";
        public const string ChiCocoon_Yulon = "Chi Cocoon (Yu'lon)";
        public const string LifeCocoon = "Life Cocoon";
        public const string SoothingBreath = "Soothing Breath";
        public const string GustOfMists = "Gust of Mists";
        public const string GustofMists_ChiJi = "Gusts of Mists (Chi-Ji)";
        public const string SheilunsGift = "Sheilun's Gift";
        public const string RefreshingJadeWind = "Refreshing Jade Wind";
        public const string FaelineStomp = "Faeline Stomp";
        public const string SummonJadeSerpentStatue = "Summon Jade Serpent Statue";
        public const string Unison = "Unison";

        #endregion

        #region Damage

        public const string RisingSunKick = "Rising Sun Kick";
        public const string BlackoutKick = "Blackout Kick";
        public const string TigerPalm = "Tiger Palm";
        public const string SpinningCraneKick = "Spinning Crane Kick";
        public const string TouchOfDeath = "Touch of Death";
        public const string CracklingJadeLightning = "Crackling Jade Lightning";
        public const string EyeOfTheTiger = "Eye of the Tiger";
        public const string Melee = "Melee";

        #endregion

        #region Hybrid

        public const string ChiWave = "Chi Wave";
        public const string ChiBurst = "Chi Burst";
        public const string ZenPulse = "Zen Pulse";
        public const string LessonOfAnger = "Lesson of Anger";

        #endregion


    }

    public enum AbilityType
    {
        Physical = 1,
        Nature = 2,
        Other = 3,
    }
    public enum HotIds
    {
        RenewingMist = 1,
        EssenceFont = 2,
        EnvelopingMist = 3,
        SoothingMist = 4,
        EnvelopingBreath = 5,
        SoothingBreath = 6,
        EssenceFont_FLS = 7,
        RefreshingJadeWind = 8,
        SoothingMist_Jss = 9,
    }
    
}
