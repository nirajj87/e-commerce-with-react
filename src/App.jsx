import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import  ProductsCard  from './components/ProductsCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartList from './components/CartList';

import CheckoutPage from "./pages/CheckoutPage";
import Contactus from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import MyOrders from "./components/Dashboard/MyOrders";

function App() {
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  return (
    <>
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<ProductsCard />}></Route>
      <Route path='/cart' element={<CartList />}></Route>
      
      <Route path="/checkout" element={<CheckoutPage cartItems={cart} />} />

      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<Contactus />} />
    
     </Routes>  
     </BrowserRouter>
    </>
  )
}

export default App

