import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
interface MuiTextFieldProps extends Omit<TextFieldProps,"variant">{

}
const MuiTextField:React.FC<MuiTextFieldProps> = (props) => {
  return (
         <TextField {...props}/>
  )
}

export default MuiTextField