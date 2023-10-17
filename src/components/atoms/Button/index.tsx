import { Button, ButtonProps} from '@mui/material'
import React from 'react'
interface CustomButtonProps extends ButtonProps {

}
const CustomButton: React.FC<CustomButtonProps> = (buttonprops) => {
    return (
        <Button {...buttonprops} />
    )
}

export default CustomButton