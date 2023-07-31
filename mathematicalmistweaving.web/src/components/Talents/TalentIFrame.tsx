import React from "react";
import { Defaults } from "../../common/constants";



export function TalentIFrame() {
    let srcUrl;
    if (!srcUrl) {
        srcUrl = Defaults.Talents.Url + Defaults.Talents.TalentString + Defaults.Talents.Options;
    }
    return (
        <React.Fragment>
            <div className="iframe">
                <iframe title="talentIframe" src={srcUrl} allowFullScreen={true} height="1000" width="1400" ></iframe>
            </div>
        </React.Fragment>
    );
}