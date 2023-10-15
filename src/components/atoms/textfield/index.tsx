import React from 'react'
import { TextField, TextFieldProps} from "@mui/material";
interface CustomTextfieldProps extends Omit<TextFieldProps,"variant">{

}
const CustomTextfield:React.FC<CustomTextfieldProps> = (props) => {
  return (
    <TextField {...props}/>
  )
}

export default CustomTextfield