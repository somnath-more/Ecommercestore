import styled from '@emotion/styled';
import { Grid,Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'

import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';
import { FetchCart } from '../../services';
import CustomTypograpy from '../../atoms/Typograpy';
import CustomButton from '../../atoms/button';

const OuterGrid=styled(Paper)({
         height:'auto',
         width:'850px',
         position: 'absolute' as 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
})

const CartModel = () => {
    const [cartdata,setCartData]=useState([]);
    const[totalprice,setTotalPrice]=useState<number>();

    useEffect(()=>{
        FetchCart().then((res)=>{
             setCartData(res.data);
        }).catch((error)=>{
              console.log(error);
        })

    })

    useEffect(() => {
        const totalPrice = cartdata.reduce((acc, cart:{id:number,product:string,price:number}) => acc + cart.price, 0);
        setTotalPrice(totalPrice);
      }, [cartdata]);
  return (
    <>
    <OuterGrid>
      <Grid spacing={4}>
      <>
  <CustomTypograpy variant="h3" children={"Cart List"} />
  <Grid container>
    <Grid item xs={6}>
      <CustomTypograpy variant="body2" children="Name" />
      {cartdata.map((cart:{product:string,id:number}) => (
        <CustomTypograpy key={cart.id} variant="body2" children={cart.product} />
      ))}
    </Grid>
    <Grid item xs={6}>
      <CustomTypograpy variant="body2" children="Price" />
      {cartdata.map((cart:{price:number,id:number}) => (
        <CustomTypograpy key={cart.id} variant="body2" children={cart.price} />
      ))}
    </Grid>
  </Grid>
</>

        <Grid style={{display:'flex' ,justifyContent:'space-around'}}>
        <CustomTypograpy variant="h5" children={`Total Price : ${totalprice}`} />
        <CustomButton startIcon={<InventoryTwoToneIcon/>} children={"buy"} size={'large'} style={{background:'green',color:'black'}} onClick={()=>alert("Buyed Succesfuuly")} />
  
        </Grid>
      </Grid>
    </OuterGrid>
    </>
  )
}

export default CartModel