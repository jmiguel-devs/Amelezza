import "./App.css";
import { Container, Grid } from "@mui/material";
import ProductListMiel from "./Components/ProductList/ProductListMiel/ProductListMiel.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home.jsx";
import Cart from "./Views/Cart/Cart.jsx";
import Checkout from "./Views/Checkout/Checkout";
import OrderFinished from "./Views/OrderFinished/OrderFinished";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/carrito" element={<Cart />}></Route>
        <Route exact path="/checkout" element={<Checkout />}></Route>
        <Route exact path="/gracias" element={<OrderFinished />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
