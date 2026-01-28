import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';

// Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Admin from "./Components/Admin";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

import Login from "./Components/Login";
import RequireAuth from "./hoc/RequireAuth"; 

function App() {
  const [products, setProducts] = useState([]);
  const [themeColor, setThemeColor] = useState("#ff9800"); // Default Orange from your screenshot

  // Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const API_URL = "http://localhost:3000/products";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Server error:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 1. UPDATED: Logic to handle Quantity
  const handleAddToCart = (product) => {
    // Check if item is already in cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If found, just increase the quantity by 1
      setCart(cart.map((item) => 
        item.id === product.id 
          ? { ...item, quantity: (item.quantity || 1) + 1 } 
          : item
      ));
    } else {
      // If new, add it with quantity: 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} added to cart!`);
  };

  // 2. NEW: Function to Increase/Decrease Quantity
  const handleUpdateQuantity = (productId, amount) => {
    setCart(cart.map((item) => {
      if (item.id === productId) {
        // Calculate new quantity
        const newQuantity = (item.quantity || 1) + amount;
        // Don't let it go below 1
        return { ...item, quantity: Math.max(1, newQuantity) };
      }
      return item;
    }));
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  // (Admin functions remain the same)
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

  // Calculate total items for the badge (sum of all quantities)
  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div style={{ "--primary": themeColor }}>
      
      <Header cartCount={cartItemCount} onChangeTheme={setThemeColor} /> 
      
      <div className="main-container">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Categories />
                <Products products={products} onAddToCart={handleAddToCart} onDelete={handleDelete} />
              </>
            } />
            
            <Route path="/shop" element={
              <Products products={products} onAddToCart={handleAddToCart} onDelete={handleDelete} />
            } />
            
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/cart" element={
              <Cart 
                cartItems={cart} 
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity} // 👈 Pass the new function here
              />
            } />

            <Route path="/login" element={<Login />} />
            
            <Route 
              path="/admin" 
              element={
                <RequireAuth>
                  <Admin onAdd={handleAddProduct} />
                </RequireAuth>
              } 
            />
          </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;