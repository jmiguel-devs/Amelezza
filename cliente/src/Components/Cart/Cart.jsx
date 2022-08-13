import React, {useState, useEffect} from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector, useStore } from "react-redux";
import "./styles.css"
import { useCart } from "react-use-cart";
import { Button } from '@mui/material';

const Cart = () => {

    const API_URL = `${window.location.protocol}//${window.location.hostname}:5000/cdn`

    const {
        isEmpty,
        cartTotal,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const state = useSelector((state) => state);

    const [toggleCart, setToggleCart] = useState(state)

    useEffect(() => {
        setToggleCart(state)
    }, [state])
    
    return (
        <React.Fragment >
          <SwipeableDrawer
            anchor="right"
            open={toggleCart}
            onClose={() => setToggleCart(false)}
            onOpen={() => setToggleCart(true)}
          >
            <div className="cart-container">
                <div className="cart-summary-container">
                    <h3 className='carrito-name'>Carrito</h3>
                    <CloseIcon onClick={() => setToggleCart(false)}></CloseIcon>
                </div>
                {isEmpty ? (
                    <div className="empty-cart-container">
                        <h3>Tu carrito está vacío</h3>
                        <Button className="cart-volver-atras" startIcon={<KeyboardBackspaceIcon />}>Volver atrás</Button>
                    </div>
                ) : items.map((item) => (
                    <div className="cart-item-container" key={item._id}>
                        <div className="cart-summary-first-row">
                            <div className="cart-item-img-and-name">
                                <img src={`${API_URL}/${item.picture}`} alt={item.name} className="cart-item-image-container"></img>
                                <h4 className="cart-item-name">{item.name}</h4>
                            </div>
                            <div className="remove-icon">
                                <DeleteOutlineIcon className="delete-item-cart-icon" color="error" onClick={() => removeItem(item._id)}></DeleteOutlineIcon>
                            </div>
                        </div>
                        <div className="cart-summary-second-row">
                            <div className="cart-item-quantity-container">
                                <small>Cantidad</small>
                                <div className="cart-quantity-box">
                                    <RemoveCircleIcon className="quantity-icon" color="primary" onClick={() => updateItemQuantity(item._id, item.quantity - 1)}></RemoveCircleIcon>
                                    <p className='cart-item-quantity'>{item.quantity}</p>
                                    <AddCircleIcon className="quantity-icon" color="primary" onClick={() => updateItemQuantity(item._id, item.quantity + 1)}></AddCircleIcon>
                                </div>
                            </div>
                            <h4 className='cart-item-total'>{(item.itemTotal).toFixed(2)}€</h4>
                        </div>
                    </div>
                ))}
                {isEmpty ? null : (
                    <div className="cart-checkout-container">
                        <div className="total-cart">
                            <small>Total</small>
                            <h4>{(cartTotal).toFixed(2)}€</h4>
                        </div>
                        <Button href="/checkout" className="cart-checkout-button" endIcon={<KeyboardBackspaceIcon style={{ transform: "rotate(180deg)" }}/>}>Comprar</Button>
                        <a className="cart-link" href="/carrito">Ver carrito detallado</a>
                    </div>
                )}
            </div>
          </SwipeableDrawer>
        </React.Fragment>
    )
}

export default Cart