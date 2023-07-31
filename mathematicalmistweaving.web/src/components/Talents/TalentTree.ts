import React from 'react';
import TalentNode, { Node } from './TalentNode';


type TalentTier = {
    tier: number;
    talents: Node[];
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