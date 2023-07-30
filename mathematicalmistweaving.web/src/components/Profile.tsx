import React from "react";
import { Component } from "react";

import MiscOptions from "./MiscellaneousOptions";
import Race from "./Race";
import Stats from "./Stats";
import TalentTree from "./Talents/Talents";


class Profile extends Component {
    render() {
        return (
            <React.Fragment>
            
                <Race />
                <Stats />
                <MiscOptions />
                <TalentTree />
            
            </React.Fragment>
        );
    } 
}

export default Profile;