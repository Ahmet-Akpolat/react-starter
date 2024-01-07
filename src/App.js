import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import ProductAdd from "./pages/Products/ProductAdd"

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<div>Not Found!</div>} />
          <Route path="/productadd" element={<ProductAdd/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
