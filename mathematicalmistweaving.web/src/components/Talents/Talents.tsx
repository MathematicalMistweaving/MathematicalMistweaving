import { Defaults } from "../../common/constants";
import TalentNode, { ChoiceNode, Node } from "./TalentNode";



function TalentTree() {
    let srcUrl;
    if (!srcUrl) {
        srcUrl = Defaults.Talents.Url + Defaults.Talents.TalentString + Defaults.Talents.Options;
    }

    let firstNode: Node = {
        name: "Enveloping Mist",
        row: 1,
        column: 3,
        prereqNodes: undefined,
        selected: true,
        choiceNode: false,
        ranks: 1,
        tierActive: true
    };
    let testNode: Node = {
        name: "Clouded Focus",
        row: 2,
        column: 1,
        prereqNodes: undefined,
        selected: false,
        choiceNode: true,
        ranks: 1,
        tierActive: false
    };
    let choiceTest: Node = {
        name: "Ancient Teachings",
        row: 2,
        column: 1,
        prereqNodes: undefined,
        selected: false,
        choiceNode: true,
        ranks: 1,
        tierActive: false
    }
    return (
        <div className="App">
            <h3 >Select Talents:</h3>
            <TalentNode node={firstNode} />
            <ChoiceNode node={testNode} nodeTwo={choiceTest}/>
            <button type="submit" className="Center"><strong>Calculate</strong></button>
            <div className="iframe">
                <iframe title="talentIframe" src={srcUrl} allowFullScreen={true} height="1000" width="1400" ></iframe>
            </div>

        </div>
    );
}

export default TalentTree;