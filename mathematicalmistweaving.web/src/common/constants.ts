
const baseURL = "https://localhost:7062/api/v1/"
export const REQUEST_URLS = {
    HealingSpells: "SpellData/healing/",
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
    Intellect: 12000,
    CriticalStrike: 3500,
    Haste: 5200,
    Mastery: 500,
    Versatility: 2100,
    Leech: 972,
    Stamina: 27000,
}

export function makeRequestUrl(requestString: string) {
    return baseURL + requestString;
}