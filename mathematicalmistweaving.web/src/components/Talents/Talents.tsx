import { Defaults } from "../../common/constants";
import TalentNode, { Node } from "./TalentNode";



function TalentTree() {
    let srcUrl;
    if (!srcUrl) {
        srcUrl = Defaults.Talents.Url + Defaults.Talents.TalentString + Defaults.Talents.Options;
    }

    let testNode: Node = {
        name: "Clouded Focus",
        row: 1,
        column: 1,
        prereqNodes: undefined,
        selected: true,
        choiceNode: false,
        ranks: 1,
        tierActive: true
    };
    return (
        <div className="App">
            <h3 >Select Talents:</h3>
            <TalentNode node={testNode} name="Clouded Focus" />
            <button type="submit" className="Center"><strong>Calculate</strong></button>
            <div className="iframe">
                <iframe title="talentIframe" src={srcUrl} allowFullScreen={true} height="1000" width="1400" ></iframe>
            </div>

        </div>
    );
}

export default TalentTree;