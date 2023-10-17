import { Grid } from '@mui/material'
import React from 'react'
import SignIn from '../../organisms/SignIn'

const SignInPage = () => {
  return (
    <Grid container>
        <Grid xs={6} md={6}>
           <h1>Hello</h1>
        </Grid>
        <Grid xs={6} md={6}>
           <SignIn/>
        </Grid>
    </Grid>
  )
}

export default SignInPage