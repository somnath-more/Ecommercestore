import { TextField, TextFieldProps} from '@mui/material'
import React from 'react'
interface CustomTextFieldProps extends Omit< TextFieldProps,"variant"> {

}
const CustomTextField: React.FC<CustomTextFieldProps> = (TextFieldprops) => {
    return (
        <TextField {...TextFieldprops} />
    )
}

export default CustomTextField