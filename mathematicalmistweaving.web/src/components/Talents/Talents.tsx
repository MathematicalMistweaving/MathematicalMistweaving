
import Grid  from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { Defaults } from "../../common/constants";
import { LayoutItem } from "../Styled/Item";
import TalentNode, { ChoiceNode, Node } from "./TalentNode";


function TalentTree() {
    let basicNode: Node = {
        name: "Enveloping Mist",
        row: 1,
        column: 3,
        prereqNodes: undefined,
        selectedRank: 1,
        choiceNode: false,
        maxRank: 1,
        tierActive: true
    };
    let multiRankNode: Node = {
        name: "Rapid Diffusion",
        row: 4,
        column: 7,
        prereqNodes: undefined,
        selectedRank: 0,
        choiceNode: false,
        maxRank: 2,
        tierActive: true
    };
    let choiceOne: Node = {
        name: "Clouded Focus",
        row: 2,
        column: 1,
        prereqNodes: undefined,
        selectedRank: 1,
        choiceNode: true,
        maxRank: 1,
        tierActive: true
    };
    let choiceTwo: Node = {
        name: "Ancient Teachings",
        row: 2,
        column: 1,
        prereqNodes: undefined,
        selectedRank: 0,
        choiceNode: true,
        maxRank: 1,
        tierActive: true
    }
    return (
        <LayoutItem className="box-shadow">
        <div className="App header">Talents:</div>
            <Box sx={{ flexGrow: 1, ml: '15px'}}>
                <Grid container spacing={9} rowSpacing={0} columnSpacing={1.5} >
                    <TalentNode node={basicNode} />
                    <TalentNode node={multiRankNode}/>
                    <ChoiceNode node={choiceOne} nodeTwo={choiceTwo} />
                </Grid>
                </Box>
        </LayoutItem>
    );
}

export default TalentTree;