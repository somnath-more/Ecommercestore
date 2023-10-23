import styled from '@emotion/styled'
import { Box, Grid, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import CustomTypograpy from '../../atoms/Typograpy'
import axios from 'axios'
import CustomButton from '../../atoms/button'
import CustomTextfield from '../../atoms/textfield'
import CartModal from '../CartModal'
import Modal from '@mui/material/Modal';
import { fetchStoreData, storeToCart } from '../../services'
const OuterGrid = styled(Paper)({
  height: "99vh",
  background: 'lightgreen'
})
const handleStyle = {
  // position: 'absolute' as 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
}
const Product = () => {
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)
  useEffect(() => {
    fetchStoreData().
    then((response) => {
      console.log('RESPONSE', response.data)
      setFilterData(response.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const handleSearch = (e: string | number | any) => {
    setSearch(e.target.value)
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
  const handleAddCart = async (name: string, price: number) => {
    const cartData = {
      product: name,
      price: price
    }
    storeToCart(cartData).then((response) => {
      console.log(response)
      alert("post succes")
    })
    
  }
  return (
    <OuterGrid>
      <Grid item style={{ width: '850px', justifyContent: 'center', alignItems: 'center' }}>
        <CustomTypograpy variant="h2" children={"Ecommerce Store"} />

      </Grid>
      <Grid  style={{ display: 'flex', width: '850px', justifyContent: "space-between" }}>
        <CustomTextfield placeholder='search by name' value={search} size='small' onChange={handleSearch} />
        <CustomButton variant="contained" children={"Buy Carts"} style={{ background: 'orange' }} onClick={handleOpen} />
        
        <Modal
          open={open}
          onClose={handleClose}
        >

          <Box sx={handleStyle}>
            <CartModal />
          </Box>
        </Modal>

      </Grid>
      {
        filterData ?(
        filterData
          .filter((data: {name:string,price:number}) => data.name?.toLowerCase().includes(search.trim().toLowerCase()) || data.price?.toString().includes(search))
          .map((data: any) => (
            
            <Grid container >
            <Grid item style={{width:'850px'}}>
              <Stack spacing={3} style={{ background: 'pink', marginTop: '15px', boxShadow: '20px', border: '2px solid red' }}>
                <CustomTypograpy variant="body1" children={data.name} />
                <CustomTypograpy variant="body1" children={data.description} />
                <CustomTypograpy variant="body1" children={data.price} />
                <CustomTypograpy variant="body1" children={data.category} />
                <CustomButton variant="contained" children={"Add to Cart"} style={{ background: 'blue' }} onClick={(e) => handleAddCart(data.name, data.price)} />
              </Stack>
            </Grid>
          </Grid>
            
          ))
    
      ):(
        <div>Data is Loading or Not Found</div>
      )
    }
      <Stack spacing={4}>

      </Stack>
    </OuterGrid>
  )
}

export default Product