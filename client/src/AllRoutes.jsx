import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import OtpVerify from "./components/OtpVerify.jsx";
import Login from "./pages/Signin";
import AddToCart from "./pages/AddToCart.jsx";
import Cart from "./pages/Cart.jsx";
import Signup from "./pages/Signup.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verify" element={<OtpVerify />} />

      <Route path="/login" element={<Login />} />
      <Route path="/Addtocart" element={<AddToCart />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:id" element={<ProductDetail />} />
       <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default AllRoutes;
