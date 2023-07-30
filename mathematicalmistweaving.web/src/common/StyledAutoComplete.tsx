import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";

const StyledAutocomplete = styled(Autocomplete)({
    "& + .MuiAutocomplete-popper .MuiAutocomplete-listbox":
    {
        backgroundColor: '#282c34'
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option":
    {
        backgroundColor: '#282c34'
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='true']":
    {
        backgroundColor: '#282c34',
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected='false']:hover":
    {
        backgroundColor: 'grey',
    },
    "& + .MuiAutocomplete-popper .MuiAutocomplete-option[aria-selected ='true'] .Mui-focused":
    {
        backgroundColor: '#282c34'
    },
});

export default StyledAutocomplete;