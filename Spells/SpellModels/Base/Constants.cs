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
        public const string Unison = "Unison";
        public const string HealingElixir = "Healing Elixir";
        public const string YulonsWhisper = "Yu'lon's Whisper";
        public const string ExpelHarm = "Expel Harm";
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
        public const string FaelineStomp = "Faeline Stomp";


        #endregion

        #region Casted Spells
        public const string ManaTea = "Mana Tea";
        public const string ThunderFocusTea = "Mana Tea";
        public const string InvokeChiji = "Invoke Chi-Ji, the Red Crane";
        public const string InvokeYulon = "Invoke Yu'lon, the Jade Serpent";
        public const string SummonJadeSerpentStatue = "Summon Jade Serpent Statue";
        #endregion

    }

    public class TalentNames
    {
        public const string AwakenedFaeline = "Awakened Faeline";
        public const string AncientTeachings = "Ancient Teachings";
        public const string RisingMist = "Rising Mist";
        
        public const string AncientConcordance = "Ancient Concordance";
        public const string ShaohaosLessons = "Shaohao's Lessons";
        public const string LegacyOfWisdom = "Legacy of Wisdom";
        public const string SpiritOfTheCrane = "Spirit of the Crane";
        public const string TeachingsOfTheMonastery = "Teachings of the Monastery";
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