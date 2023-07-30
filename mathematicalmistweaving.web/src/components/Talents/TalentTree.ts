import React from 'react';


type Talent = {
    name: string;
    node: { row: number, column: number };
    tier: number;
    selected: boolean;
}

type TalentTier = {
    tier: number;
    talents: Talent[];
    selectedCount: number;//talents.selected == true count
    requiredCount: number; 
}

type TalentTree = {
    tiers: TalentTier[];
    rows: number;
    columns: number;
    selectedCount: number; // tiers.reduce(tier => tier.selectedCount, 0);
    maxCount: number; 

}

export default TalentTree;