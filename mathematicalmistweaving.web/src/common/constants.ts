
const baseURL = "https://localhost:7062/api/v1/"
export const REQUEST_URLS = {
    HealingSpells: "SpellData/healing/",
    StatPercent: "Math/stat",
};

export const DEFAULTS = {
    Talents: {

        //Icy Veins Embed
        /*Url: "https://www.icy-veins.com/wow/dragonflight-talent-calculator",
        TalentString: "#10--270$nqmPDDppsG1rv0u1xB1CCji0hMMFEELLKzzy+jMDPzp1KbEuuGiO1y0F0CCxe0N1r1I0JJllmo0a1*",
        Options: ""*/

        //Raidbots embed
        Url: "https://www.raidbots.com/simbot/render/talents/",
        TalentString: "B4QAAAAAAAAAAAAAAAAAAAAAA0CFkIRpoRIlQSKRJRatAAAAAAAAAAAAASaSKhEJJaFQLJpBJAAIA",
        Options: "?width=1400&height=500&level=70&bgcolor=3e3e42",
    },
    Intellect: { name: "Intellect", rating: 12000 },
    CriticalStrike: { name: "Crit", rating: 3500 },
    Haste: { name: "Haste", rating: 5200 },
    Mastery: { name: "Mastery", rating: 500 },
    Versatility: { name: "Vers", rating: 2100 },
    Leech: { name: "Leech", rating: 972 },
    Stamina: { name: "Stamina", rating: 27000 },
    StatMaxLength: 5,
}

export const ThunderFocusTeaSpells = [
    "Renewing Mist",
    "Rising Sun Kick",
    "Vivify",
    "Essence Font",
    "Enveloping Mist",
];

export const Races = [
    "Goblin",
    "Night Elf",
    "Blood Elf",
    "Pandaren",
    "Human",
    "Dwarf",
    "Orc",
    "Vulpera",
    "Undead",
    "Dark Iron Dwarf",
    "Void Elf",
    "Tauren",
    "Gnome",
    "Troll",
    "Highmountain Tauren",
    "Maghar Orc",    
    "Draenei",
    "Mechagnome",
    "Dracthyr",
    "Nightborne",
    "Zandalari Troll",
    "Kultiran Human",
];

export function makeRequestUrl(requestString: string) {
    return baseURL + requestString;
}