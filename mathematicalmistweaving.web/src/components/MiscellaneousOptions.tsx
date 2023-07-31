import * as React from 'react';
import TextField from '@mui/material/TextField';
import { ThunderFocusTeaSpells, Defaults } from '../common/constants';
import StyledAutocomplete from './Styled/StyledAutoComplete';
import { AutocompleteRenderInputParams} from '@mui/material';
import { LayoutItem } from './Styled/Item';

function MiscOptions() {

    return (
        <LayoutItem className="box-shadow">
            <div className="App header">Misc. Options:</div>
            <StyledAutocomplete
                defaultValue={Defaults.TFTSpell}
                disablePortal
                id="TFT_Spell"
                options={ThunderFocusTeaSpells}
                className="Left-no-pad"
                sx={{
                    width: 200}}
                renderInput={(params: AutocompleteRenderInputParams) => <TextField {...params} label="Select TFT Use..."/> }
            />
        </LayoutItem>
    );
}




export default MiscOptions;