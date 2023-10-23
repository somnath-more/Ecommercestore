import { Typography, TypographyProps } from '@mui/material'
import React from 'react'
interface MuiTypograpyProps extends TypographyProps{

}
const MuiTypograpy:React.FC<MuiTypograpyProps> = (props) => {
  return (
    <Typography {...props}/>
  )
}

export default MuiTypograpy