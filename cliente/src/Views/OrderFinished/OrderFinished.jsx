import React from 'react'
import { Container, Grid } from "@mui/material";


const OrderFinished = () => {
  return (
    <Container maxWidth="xl">
            <Grid>
                <h1 className='cart-title-main'>Gracias!</h1>
                <h2>Su pedido se ha realizado correctamente</h2>
            </Grid>
    </Container>
  )
}

export default OrderFinished