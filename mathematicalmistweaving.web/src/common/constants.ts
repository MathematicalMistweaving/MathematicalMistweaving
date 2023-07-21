
const baseURL = "https://localhost:7062/api/v1/"
export const REQUEST_URLS = {
    HealingSpells: "SpellData/healing/",
};

export const DEFAULTS = {
    Talents: {
        Url: "https://www.raidbots.com/simbot/render/talents/",
        TalentString: "B4QAAAAAAAAAAAAAAAAAAAAAA0CFkIRpoRIlQSKRJRatAAAAAAAAAAAAASaSKhEJJaFQLJpBJAAIA",
        Options: "?width=1400&height=500&level=70&bgcolor=3e3e42", 
    },
    Intellect: 12000,
    CriticalStrike: 3500,
    Haste: 5139,
    Mastery: 500,
    Versatility: 2100,
}

export function makeRequestUrl(requestString: string) {
    return baseURL + requestString;
}