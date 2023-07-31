import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";


export type Node = {
    name: string;
    row: number;
    column: number;
    prereqNodes: Node[] | undefined;
    selected: boolean;
    ranks: number;
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
        (node.ranks === 1) ?
            <FormControlLabel control={<Checkbox defaultChecked={node.selected} disabled={!node.prereqNodes?.some((node) => node.selected === true) && !node.tierActive} />} label={node.name} />
            :
            <>This is a Multi-Rank Node</>
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