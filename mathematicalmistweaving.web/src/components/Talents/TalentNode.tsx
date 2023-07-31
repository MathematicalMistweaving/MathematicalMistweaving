import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";


export type Node = {
    name: string;
    row: number;
    column: number;
    prereqNodes: Node[] | undefined;
    selectedRank: number;
    maxRank: number;
    choiceNode: boolean;
    tierActive: boolean;
}


type Props = {
    node: Node;
    nodeTwo?: Node;
};

const TalentNode = ({
    node,
}: Props) => {
    return (
        (node.maxRank === 1) ?
            <FormControlLabel control={<Checkbox defaultChecked={node.selectedRank === 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label={node.name} />
            :
            <div className="Center">
            <FormControlLabel control={<Checkbox defaultChecked={node.selectedRank >= 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label={node.name}/>
            <Box  sx={{ display: 'flex', flexDirection: 'column', ml:"45%",  justifyItems: 'center' }}>
            <FormControlLabel control={<Checkbox size="small" defaultChecked={node.selectedRank >= 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label="Rank 1" />
            <FormControlLabel control={<Checkbox size="small" defaultChecked={node.selectedRank === node.maxRank} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label="Rank 2" />
                </Box>
            </div>
                
            
    );
};

export const ChoiceNode = ({
    node,
    nodeTwo,
}: Props) => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    }
    return (
        <RadioGroup
            className="Center"
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
        >
            <FormControlLabel value={node.name} control={<Radio />} disabled={!(node.tierActive && node.tierActive)} label={node.name} />
            <FormControlLabel value={nodeTwo?.name} control={<Radio />} disabled={!(node.tierActive && node.tierActive)} label={nodeTwo?.name} />
        </RadioGroup>
    );
};




export default TalentNode;