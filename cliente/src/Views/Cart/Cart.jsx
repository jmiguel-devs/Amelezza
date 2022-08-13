import React from 'react'
import { Container, Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./styles.css"
import { useCart } from "react-use-cart";


const Cart = () => {

    const { items, removeItem, isEmpty, updateItemQuantity } = useCart();

    return (
        <Container maxWidth="xl">
            <Grid>
                <h1 className='cart-title-main'>Carrito</h1>
                {isEmpty ? <h3>No hay productos en el carrito</h3> : 
                    <TableContainer component={Paper} className="cart-table">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell className='table-th'></TableCell>
                                <TableCell className='table-th' align="left">Producto</TableCell>
                                <TableCell className='table-th' align="right">Precio</TableCell>
                                <TableCell className='table-th' align="right">Cantidad</TableCell>
                                <TableCell className='table-th' align="right">Subtotal</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {items.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <div className="remove-icon">
                                            <DeleteOutlineIcon className="delete-item-cart-icon" color="error" onClick={() => removeItem(item._id)}></DeleteOutlineIcon>
                                        </div>
                                    </TableCell>
                                    <TableCell className="table-td" align="left">{item.name}</TableCell>
                                    <TableCell className="table-td" align="right">{item.price} €</TableCell>
                                    <TableCell className="table-td" align="right">
                                        <div className="cart-quantity-box">
                                            <RemoveCircleIcon className="quantity-icon" color="primary" onClick={() => updateItemQuantity(item._id, item.quantity - 1)}></RemoveCircleIcon>
                                            <p className='cart-item-quantity'>{item.quantity}</p>
                                            <AddCircleIcon className="quantity-icon" color="primary" onClick={() => updateItemQuantity(item._id, item.quantity + 1)}></AddCircleIcon>
                                        </div>
                                    </TableCell>
                                    <TableCell className="table-td" align="right">{(item.itemTotal).toFixed(2)} €</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }

                {isEmpty ? null : (
                    <div style={{ width: "100%", display: "flex" }}>
                        <Button href="/checkout" className="cart-checkout-button" endIcon={<KeyboardBackspaceIcon style={{ transform: "rotate(180deg)" }}/>}>Finalizar compra</Button>
                    </div>
                )}

            </Grid>
        </Container>
  )
}

export default Cart