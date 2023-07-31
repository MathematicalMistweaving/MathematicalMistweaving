import React from "react";
import { Component } from "react";

import MiscOptions from "./MiscellaneousOptions";
import Race from "./Race";
import Stats from "./Stats";
import TalentTree from "./Talents/Talents";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { LayoutItem } from "./Styled/Item";
import Talents from "./Talents/Talents";


class Profile extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1, ml: '15px' }}>
                <Grid container spacing={15} rowSpacing={0} columnSpacing={0} >
                    <LayoutItem>
                        <Race />
                        <Stats />
                    </LayoutItem>
                    <MiscOptions />
                    <Talents />
                </Grid>
            </Box>
        );
    } 
}

export default Profile;