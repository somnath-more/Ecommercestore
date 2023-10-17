import React, { useState } from 'react'
import CustomTypograpy from '../atoms/Typograpy'

import { Checkbox, Divider, Grid, Paper, Stack, styled } from '@mui/material'
import CustomTextField from '../atoms/TextField'
import { NO_ACCOUNT, SIGN_UP, emailRegex, passwordRegex } from '../../utils/constant';
import GoogleIcon from '@mui/icons-material/Google';
import CustomButton from '../atoms/Button'
const OuterGrid= styled(Grid)({
    height:"800px",
    width:"520px",
    boxShadow:"10px grey",
    margin:"70px",
    padding:"30px",
})
const SignIn = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [passworderror,setPasswordError]=useState("");
    const [emailerror,setEmailError]=useState("");
    const [visible,setVisible]=useState(false);
    const validateEmail=(email:string|any)=>{
          if(email.length <6){
              setEmailError("Invalid leangth");
          }else if(!emailRegex.test(email)){
            setEmailError("Invalid  Email format");
          }else{
            setEmailError("")
          }
    }
    const validatePassword=(password:string)=>{
        if(password.length <6){
            setPasswordError("Invalid leangth");
        }else if(!passwordRegex.test(password)){
          setPasswordError("Invalid  password format");
        }else{
          setPasswordError("")
        }
    }
    const handleEmailChange=(e:string |any)=>{
        const emailValue=e.target.value;
              setEmail(emailValue)
              validateEmail(emailValue)
    }
    const handlePasswordChange=(e:string |any)=>{
        const passwordValue=e.target.value
        setPassword(passwordValue)
        validatePassword(passwordValue)
}
const handleLogin=()=>{
    console.log("Login Succes")
}
const buttonColor =
email === "" || password === "" || passworderror || emailerror ? "lightgrey" : "blue";
  return (
    <>
   <OuterGrid>
     
       <CustomTypograpy variant="h4" children={"Sign In"}/>
        <Stack spacing={3} >
        <CustomTypograpy variant="body2" children={"Email"}/>
        <CustomTextField value={email} type="email" helperText={<CustomTypograpy style={{color:'red'}} children={emailerror}/> } placeholder="joh@gmail.com" onChange={handleEmailChange}/>
       
        <CustomTypograpy variant="body2" children={"Password"}/>
        <CustomTextField value={password} type="password" helperText={<CustomTypograpy style={{color:'red'}} children={passworderror}/>} placeholder="**********" onChange={handlePasswordChange}/>
       
        <Grid style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Grid style={{display:"flex",alignItems:"center"}}>
            <Checkbox/>
            <CustomTypograpy variant='body2' children={"Remember Me"}/>
            </Grid>
            <CustomTypograpy variant='body2' children={"Forgot Password?"} style={{color:'violet'}}/>
        </Grid>
         <CustomButton variant="contained" onClick={handleLogin} size="large" children={"Sign In"} style={{background:buttonColor}}/>
        
        <Divider children={"or"}></Divider>

        {/* Google ICon */}
        <CustomButton startIcon={<GoogleIcon/>} children={"Continue With Google"}  style={{background:"magenta"}}/>
       <Grid container style={{justifyContent:'center',alignContent:"center",display:'flex',alignItems:"center"}}>
        <CustomTypograpy variant='body1'  children={NO_ACCOUNT}/>
        <CustomTypograpy style={{color:'violet'}} children={SIGN_UP}/>
        </Grid>
        </Stack>
   </OuterGrid>
   </>
  )
}

export default SignIn