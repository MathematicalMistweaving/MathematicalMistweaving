import { AutocompleteRenderInputParams, TextField } from "@mui/material";
import React from "react";
import { Races } from "../common/constants";
import StyledAutocomplete from "../common/StyledAutoComplete";



const Race = () => {
    return (
       
         <React.Fragment>
            <div className="App Left header">Character Race:</div>
            <StyledAutocomplete
                disablePortal
                id="TFT_Spell"
                options={Races}
                className="Left"
                sx={{
                    width: 200}}
                renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Select Race..."/> }
            />
        </React.Fragment>
    );
}
export default Race;