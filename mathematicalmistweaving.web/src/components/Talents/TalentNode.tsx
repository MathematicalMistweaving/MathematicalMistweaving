import { Switch } from "@mui/base";
import { FormControlLabel } from "@mui/material";


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
    name: string;
    node: Node;
};

const TalentNode = ({
    name,
    node,
}: Props) => {
    return (
        (node.choiceNode) ? 
            <>This is a Choice Node</>
        :
        (node.ranks === 1) ?
            <FormControlLabel control={<Switch defaultChecked={node.selected} disabled={!node.prereqNodes?.some((node) => node.selected === true) && !node.tierActive} />} label={name} />
            :
            <>This is a Multi-Rank Node</>
    );
};


export default TalentNode;