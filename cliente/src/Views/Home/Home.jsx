import React from 'react'
import { Container, Grid } from "@mui/material";
import ProductListMiel from '../../Components/ProductList/ProductListMiel/ProductListMiel.jsx'
import Header from '../../Components/Header/Header.jsx'
import Intro from '../../Components/Intro/Intro.jsx'


const Home = () => {
  return (
    <Container maxWidth="xl">
        <Header></Header>
        <Intro></Intro>
        <ProductListMiel></ProductListMiel>
    </Container>
  )
}

export default Home