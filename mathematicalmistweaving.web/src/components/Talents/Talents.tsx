import { Defaults } from "../../common/constants";
import TalentTier1 from "./TalentTier1";



function TalentTree() {
    let srcUrl;
    if (!srcUrl) {
        srcUrl = Defaults.Talents.Url + Defaults.Talents.TalentString + Defaults.Talents.Options;
    }
    return (
        <div className="App">
            <h3 >Select Talents:</h3>
            <TalentTier1/>
            <button type="submit" className="Center"><strong>Calculate</strong></button>
            <div className="iframe">
                <iframe title="talentIframe" src={srcUrl} allowFullScreen={true} height="1000" width="1400" ></iframe>
            </div>

        </div>
    );
}

export default TalentTree;