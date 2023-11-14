import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Product from './Components/Product';
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import CartProvider from "./Components/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Landing />} />
            <Route path='/:id' element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
