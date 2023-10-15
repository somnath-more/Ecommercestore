import React from 'react';
import {Button,ButtonProps  } from "@mui/material";
interface CustomButtonProps extends ButtonProps{

}
const CustomButton:React.FC<CustomButtonProps> = (props) => {
  return (
    <Button {...props}/>
  )
}

export default CustomButton