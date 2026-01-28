import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Admin from "./Components/Admin";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart"; // NEW: Import the Cart page

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // NEW: State to store cart items
  const API_URL = "http://localhost:3000/products";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Server not running:", err));
  }, []);

  // NEW: Function to add item to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // NEW: Function to remove item from cart
  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const handleAddProduct = (newProduct) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
    .then(res => res.json())
    .then(data => setProducts([...products, data]));
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setProducts(products.filter(p => p.id !== id)));
  };

  return (
    <BrowserRouter>
      {/* NEW: Pass cart length so Header shows "Cart (2)" */}
      <Header cartCount={cart.length} /> 
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            {/* NEW: Pass onAddToCart function to Products */}
            <Products products={products} onAddToCart={handleAddToCart} onDelete={handleDelete} />
          </>
        } />
        
        {/* NEW: Pass onAddToCart here too */}
        <Route path="/shop" element={<Products products={products} onAddToCart={handleAddToCart} onDelete={handleDelete} />} />
        
        <Route path="/contact" element={<Contact />} />
        
        {/* NEW: Add the Cart Route */}
        <Route path="/cart" element={<Cart cartItems={cart} onRemove={handleRemoveFromCart}/>} />
        
        <Route path="/admin" element={<Admin onAdd={handleAddProduct} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;