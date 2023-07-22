import { DEFAULTS } from "../common/constants";



function TalentTree() {
    let srcUrl;
    if (!srcUrl) {
        srcUrl = DEFAULTS.Talents.Url + DEFAULTS.Talents.TalentString + DEFAULTS.Talents.Options;
    }
    return (
        <div className="App">
            <h3 >Select Talents:</h3>
            <button type="submit" className="Center"><strong>Calculate</strong></button>
            <div className="iframe">
                <iframe title="talentIframe" src={srcUrl} allowFullScreen={true} height="1000" width="1400" ></iframe>
            </div>

        </div>
    );
}

export default TalentTree;