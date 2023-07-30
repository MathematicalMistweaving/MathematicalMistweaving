import React from "react";
import { Component } from "react";

import MiscOptions from "./MiscellaneousOptions";
import Race from "./Race";
import Stats from "./Stats";


class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <Race />
                <Stats />
                <MiscOptions />
            </React.Fragment>
        );
    } 
}

export default Profile;