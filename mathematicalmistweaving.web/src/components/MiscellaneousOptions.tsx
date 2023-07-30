import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ThunderFocusTeaSpells, Defaults } from '../common/constants';
import StyledAutocomplete from '../common/StyledAutoComplete';
import { AutocompleteRenderInputParams} from '@mui/material';

function MiscOptions() {

    return (
        <React.Fragment>
            <div className="App Left header">Misc. Options:</div>
            <StyledAutocomplete
                defaultValue={Defaults.TFTSpell}
                disablePortal
                id="TFT_Spell"
                options={ThunderFocusTeaSpells}
                className="Left"
                sx={{
                    width: 200}}
                renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Select TFT Use..."/> }
            />
        </React.Fragment>
    );
}




export default MiscOptions;