import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import { StyledFormControlLabel } from "../Styled/StyledFormControlLabel";


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


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#3E3E42',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: "15px 5px 5px 5px",
    color: "white",
}));



const TalentNode = ({
    node,
}: Props) => {
    return (
       
        (node.maxRank === 1) ?
            <Item>
                <StyledFormControlLabel sx={{ ml: 0 }} control={<Checkbox defaultChecked={node.selectedRank === 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label={node.name} />
                </Item>
                :
            <Item sx={{ height: '100%' }}>
                <StyledFormControlLabel control={<Checkbox defaultChecked={node.selectedRank >= 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label={node.name} />
               {/* <Box sx={{ display: 'flex', flexDirection: 'column', ml: "45%", backgroundColor: '#3E3E42', }}>*/}
                <StyledFormControlLabel sx={{ml: 0}} control={<Checkbox size="small" defaultChecked={node.selectedRank >= 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label="1" />
                <StyledFormControlLabel control={<Checkbox size="small" defaultChecked={node.selectedRank === node.maxRank} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label="2" />
                    {/*</Box>*/}
                </Item>
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