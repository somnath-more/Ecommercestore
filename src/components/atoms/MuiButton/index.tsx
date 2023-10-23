import { Button, ButtonProps } from '@mui/material'
import React from 'react'
interface MuiButtonProps extends ButtonProps{

}
const MuiButton:React.FC<MuiButtonProps> = (props) => {
  return (
    <Button {...props}/>
  )
}

export default MuiButton