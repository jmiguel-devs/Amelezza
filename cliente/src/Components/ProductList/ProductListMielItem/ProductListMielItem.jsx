import React from 'react'
import "./styles.css"
import { useCart } from "react-use-cart";
import { useDispatch} from "react-redux";
import Button from '@mui/material/Button';

const ProductListMielItem = (product) => {

    const { addItem } = useCart();

    const API_URL = `${window.location.protocol}//${window.location.hostname}:5000/cdn`

    const handleAddToCart = (e) => {
        e.preventDefault();
        addItem(product.product, 1)
        openCart()
    }

    const dispatch = useDispatch();

    const { totalItems  } = useCart();
    
    const openCart = () => {
        dispatch({
            type: "@cart/toggleCart"
        })
    }
    
  return (
     <div className='resp-table-column'>
            <div className="product-block-tr">
              	<img className="product-image" src={`${API_URL}/${product.product.picture}`} />
            </div>
            <hr className="product-hr"/>
            <div className="product-block-tr">
            	<h3 className='product-heading'>{product.product.name}</h3>  
            </div>
            <hr className="product-hr"/>
            <div className="product-block-tr">
                <small className="pr-small">COSECHA 2022</small>
                <p>{product.product.description}</p>
            </div>
            <form className='cart'>
              <div className="product-buy-container owl-carousel <?php echo $product->get_slug();?> ">
                  <div onClick={handleAddToCart} className="carousel-container" data-attr='<?php echo $product->get_slug();?>'>
                    <h3 className="product-buy-title">Comprar &nbsp; — &nbsp; {product.product.price}€</h3>
                  </div>
              </div>
            </form>
            
        </div>
  )
}

export default ProductListMielItem