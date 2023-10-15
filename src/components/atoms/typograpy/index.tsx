import { Typography, TypographyProps } from '@mui/material'
import React from 'react'

interface CustomTypoProps extends TypographyProps{

}
const CustomTypograpy:React.FC<CustomTypoProps> = (props) => {
  return (
       <Typography {...props}/>
  )
}

export default CustomTypograpy