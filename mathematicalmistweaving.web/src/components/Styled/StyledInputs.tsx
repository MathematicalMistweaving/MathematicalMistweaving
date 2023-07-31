import { Checkbox, Radio } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledRadio = styled(Radio)(({ theme }) => ({
    '&.Mui-checked': {
        color: green["A400"],
    },
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    '&.Mui-checked': {
        color: green["A400"],
    },
}));