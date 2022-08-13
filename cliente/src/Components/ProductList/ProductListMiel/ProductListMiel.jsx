import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material";
import {useQuery} from 'react-query'
import * as api from '../../../API/products.js'
import ProductListMielItem from '../ProductListMielItem/ProductListMielItem.jsx'
import "./styles.css"


const ProductListMiel = () => {

    const getProducts = () => {
        return api.fetchProducts()
    }

    const {data, isLoading, error} = useQuery('products', getProducts);

    useEffect(() => {
        getProducts()
    }, [])

    //Mientras cargamos los productos
    if (isLoading) return <p>Cargando</p>
    //Si hay algún error
    if (error) return <p>Algo falló en el sistema. Reinténtelo más tarde o póngase en contacto.</p>

    return (
        <Grid container>
            <h1 className="products-list-miel-title">Productos</h1>
            <Grid container>
                <div className='resp-table'>
                    <div className="resp-table-column-banner resp-table-column"></div>
                    {data.map((item) => (
                            <ProductListMielItem key={item._id} product={item}></ProductListMielItem>
                    ))}
                </div>
            </Grid>
        </Grid>
    )
}

export default ProductListMiel