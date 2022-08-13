import React, {useState} from 'react'
import { Container, Grid, TextField, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useCart } from "react-use-cart";
import {useNavigate} from 'react-router-dom';
import * as api from '../../API/orders.js'
import "./styles.css"


const Checkout = () => {

  const { items, isEmpty, totalItems, cartTotal } = useCart();

  const navigate = useNavigate();

  const initialState = {
    name: '',
    surname: '',
    address: '',
    postalCode: '',
    town: '',
    province: '',
    phone: '',  
    email: '',
    paymentMethod: 'tarjeta',
    totalCart: cartTotal,
    items: items,
    totalItems: totalItems,
    owner: '6248c185edecfe81bbf95d6d'
  }

  const [formData, setFormData] = useState(initialState)

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.phone.match(/^\d{3}\s?\d{3}\s?\d{3}$/gi)){
      alert('El número de teléfono debe tener 9 dígitos')
      return;
    }
    try {
      api.createOrder(formData)
      navigate('/gracias')
    } catch (error) {
      alert('Error al crear el pedido')
      navigate('/') 
    }
    console.log(formData)
  }

  if (isEmpty) return navigate('/carrito');

  return (
   <Container maxWidth="xl">
      <Grid container>
        <h1 className='cart-title-main'>Finalizar compra</h1>        
          <Grid container spacing={2} style={{ marginBottom: "2em" }}>   
            <Grid item xs={6}>
              <h2 style={{ marginBottom: "2em" }}>Tu pedido</h2>
              <TableContainer className="cart-table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell className='table-th' align="left">Producto</TableCell>
                                <TableCell className='table-th' align="right">Subtotal</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                              {items.map((item) => (
                                  <TableRow
                                      key={item.name}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell className="table-td" align="left">{item.name} X {item.quantity} uds.</TableCell>
                                      <TableCell className="table-td" align="right">{(item.itemTotal).toFixed(2)} €</TableCell>
                                  </TableRow>
                              ))}
                              <TableRow
                                      key={"subtotal"}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell className="table-td" align="left">Subtotal</TableCell>
                                      <TableCell className="table-td" align="right">{(cartTotal).toFixed(2)} €</TableCell>
                              </TableRow>
                              <TableRow
                                      key={"envio"}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell className="table-td" align="left">Envío</TableCell>
                                      <TableCell className="table-td" align="right">Correo Estandar 3 días -  5.02 €</TableCell>
                              </TableRow>
                              <TableRow
                                      key={"total"}
                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                      <TableCell className="table-td" align="left">Total</TableCell>
                                      <TableCell className="table-td" align="right">{Number.parseFloat((cartTotal)+5.02).toFixed(2)} €</TableCell>
                              </TableRow>
                            </TableBody>
                        </Table>
              </TableContainer>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="tarjeta"
                  name="metodopago"
                  className="radio-group"
                  onChange={handleInputChange}
                >
                  <FormControlLabel value="tarjeta" control={<Radio />} label="Tarjeta de crédito" />
                  <FormControlLabel value="transferencia" control={<Radio />} label="Transferencia bancaria" />
                </RadioGroup>
              </FormControl>
            </Grid>                  
            <Grid item xs={6}>
              <h2 style={{ marginBottom: "2em" }}>Detalles de facturación</h2>
                <form autoComplete='on' onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                          className="checkout-input"
                          type="text"
                          name="name"
                          variant="outlined"
                          label="Nombre"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                          className="checkout-input"
                          type="text"
                          name="surname"
                          variant="outlined"
                          label="Apellidos"
                          required
                          value={formData.surname}
                          onChange={handleInputChange}
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                          className="checkout-input"
                          type="text"
                          name="province"
                          variant="outlined"
                          required
                          label="Provincia"
                          value={formData.province}
                          onChange={handleInputChange}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField TextField
                        className="checkout-input"
                        type="text"
                        name="town"
                        variant="outlined"
                        required
                        label="Municipio"
                        value={formData.town}
                        onChange={handleInputChange}
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                          className="checkout-input"
                          type="text"
                          name="address"
                          variant="outlined"
                          fullWidth
                          label="Dirección de la calle"
                          required
                          value={formData.address}
                          placeholder="Calle, número, piso, puerta, etc."
                          onChange={handleInputChange}
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                          className="checkout-input"
                          type="text"
                          name="postalCode"
                          variant="outlined"
                          required
                          fullWidth
                          label="Código postal"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                      ></TextField>
                    </Grid>
                  </Grid>
                  <TextField
                      className="checkout-input"
                      type="text"
                      name="phone"
                      variant="outlined"
                      required
                      fullWidth
                      label="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                  ></TextField>
                  <TextField
                      className="checkout-input"
                      type="email"
                      name="email"
                      variant="outlined"
                      required
                      fullWidth
                      label="Correo electrónico"
                      value={formData.email}
                      onChange={handleInputChange}
                  ></TextField>
                  <input type="hidden" name="metodopago" value={formData.metodopago} />
                  <Button
                      className="checkout-button"
                      varient="container"
                      color="primary"
                      size="large"
                      type="submit"
                      fullWidth
                  >
                      Realizar el pedido
                  </Button>
                </form>
            </Grid>
          </Grid>
      </Grid>
    </Container>
  )
}

export default Checkout