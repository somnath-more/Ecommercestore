import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
interface CustomTextfieldProps extends Omit<TextFieldProps,"variant">{

}
const CustomTextField:React.FC<CustomTextfieldProps>= (props) => {
  return (
       <TextField {...props}> {props.children}</TextField>
  )
}

export default CustomTextField