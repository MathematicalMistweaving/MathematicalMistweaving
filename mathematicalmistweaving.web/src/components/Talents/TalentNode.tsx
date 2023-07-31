import { RadioGroup } from "@mui/material";
import { useState } from "react";
import React from "react";
import { StyledFormControlLabel } from "../Styled/StyledFormControlLabel";
import { Item } from "../Styled/Item";
import { StyledCheckbox, StyledRadio } from "../Styled/StyledInputs";


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
            <Item className="box-shadow">
                <StyledFormControlLabel sx={{ ml: 0 }} control={<StyledCheckbox defaultChecked={node.selectedRank === 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label={node.name} />
                </Item>
            :
            <Item sx={{ height: '100%' }} className="box-shadow">
                <StyledFormControlLabel control={<StyledCheckbox defaultChecked={node.selectedRank >= 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label={node.name} />
                <StyledFormControlLabel sx={{ ml: 0 }} control={<StyledCheckbox size="small" defaultChecked={node.selectedRank >= 1} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label="1" />
                <StyledFormControlLabel control={<StyledCheckbox size="small" defaultChecked={node.selectedRank === node.maxRank} disabled={!node.prereqNodes?.some((node) => node.selectedRank === node.maxRank) && !node.tierActive} />} label="2" />
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
        > <Item className="box-shadow">
                <StyledFormControlLabel value={"none"} control={<StyledRadio checked={value === "none"} size="small" />} disabled={!(node.tierActive && node.tierActive)} label={"None"} />
                <StyledFormControlLabel value={node.name} control={<StyledRadio checked={value === node.name} size="small" />} disabled={!(node.tierActive && node.tierActive)} label={node.name} />
                <StyledFormControlLabel value={nodeTwo?.name} control={<StyledRadio checked={value === nodeTwo?.name} size="small" />} disabled={!(node.tierActive && node.tierActive)} label={nodeTwo?.name} />
          </Item>
        </RadioGroup>
       
    );
};




export default TalentNode;