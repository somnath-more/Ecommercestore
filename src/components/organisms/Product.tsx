import React, { useEffect, useState } from 'react'
import CustomTypograpy from '../atoms/typograpy'
import { Box, Grid, Modal, Stack } from '@mui/material'
import CustomTextField from '../atoms/TextField'
import axios from 'axios'
import CustomButton from '../atoms/button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartModel from './CartModel'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Product = () => {
    const [searched, setSearched] = useState("")
    const [filtredData, setFiltredData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/stores').then((response) => {

            setFiltredData(response.data)

        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const handleNamePrice = (e: any) => {

        setSearched(e.target.value);

    }

    const handleAddToCart = async (name: string, price: number) => {
        alert("success fo adding to cart")


        const res = await axios.post(`http://localhost:3001/carts`, { product: name, price: price });
        console.log(res)
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>

            <Grid style={{ alignItems: "center", justifyContent: "center", alignSelf: "center" }}>
                    <CustomTypograpy variant="h3" children="Ecommerce store" />
                    </Grid>
                <Stack spacing={4}>
                

                    <CustomTextField placeholder='search by name and price' onChange={handleNamePrice} value={searched} size='small'  />
                    <CustomButton startIcon={<AddShoppingCartIcon/>} variant="contained" style={{background:'pink'}} children={"Cart list"} onClick={handleOpen}  />
                    <Modal
                        open={open}
                        onClose={handleClose}
                      
                    >
                      
                        <Box sx={style}>
                        <CartModel/>
                        </Box>
                    </Modal>
                    <Grid>
                        {
                            filtredData ? (
                                filtredData.filter((data: any) =>
                                    data.name.toLowerCase().includes(searched.toLowerCase()) ||
                                    data.price.toString().includes(searched)
                                )
                                    .map((data: any) => (
                                        <Stack spacing={3} key={data.id} style={{ background: 'lightgrey', marginTop: '15px' }}>
                                            <CustomTypograpy variant="body1" children={data.name} />
                                            <CustomTypograpy variant="body1" children={data.description} />
                                            <CustomTypograpy variant="body1" children={data.price} />
                                            <CustomTypograpy variant="body1" children={data.category} />
                                            <CustomButton variant="contained" style={{ background: 'blue' }} onClick={(e: any) => handleAddToCart(data.name, data.price)} children={"Add to Cart"} />
                                        </Stack>
                                    ))
                            ) : <div>Data is Loading or Not Found</div>
                        }
                    </Grid>


                    <CustomButton variant="contained" children />
                </Stack>
            

        </>
    )
}

export default Product