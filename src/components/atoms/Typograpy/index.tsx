import { Typography, TypographyProps } from '@mui/material'
import React from 'react'
interface CustomTypograpyProps extends TypographyProps{

}
const CustomTypograpy:React.FC<CustomTypograpyProps> = (typographyprops) => {
  return (
    <Typography {...typographyprops}/>
  )
}

export default CustomTypograpy