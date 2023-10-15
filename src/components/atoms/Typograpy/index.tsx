import React from 'react'
import { TypographyProps,Typography } from "@mui/material";
interface CustomTypoProps extends TypographyProps{

}
const CustomTypograpy:React.FC<CustomTypoProps> = (props) => {
  return (
    <Typography {...props}/>
  )
}

export default CustomTypograpy