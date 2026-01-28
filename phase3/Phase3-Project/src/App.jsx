import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
  
  // 1. FIX: Initialize Cart from Local Storage (so data stays on refresh)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const location = useLocation(); 
  const API_URL = "http://localhost:3000/products";

  // 2. Load Products from API
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Server error:", err));
  }, []);

  // 3. FIX: Save Cart to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

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
    <>
      <Header cartCount={cart.length} /> 
      
      {/* Container ensures pages don't overlap Header during animation */}
      <div className="main-container">
        <TransitionGroup>
          {/* Timeout must match CSS duration (300ms) */}
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            
            <Routes location={location}>
              <Route path="/" element={
                <div className="page-wrapper">
                  <Hero />
                  <Categories />
                  <Products products={products} onAddToCart={handleAddToCart} onDelete={handleDelete} />
                  <Footer />
                </div>
              } />
              
              <Route path="/shop" element={
                <div className="page-wrapper">
                  <Products products={products} onAddToCart={handleAddToCart} onDelete={handleDelete} />
                  <Footer />
                </div>
              } />
              
              <Route path="/contact" element={
                <div className="page-wrapper">
                  <Contact />
                  <Footer />
                </div>
              } />
              
              <Route path="/cart" element={
                <div className="page-wrapper">
                  <Cart cartItems={cart} onRemove={handleRemoveFromCart}/>
                  <Footer />
                </div>
              } />

              <Route path="/login" element={
                <div className="page-wrapper">
                  <Login />
                  <Footer />
                </div>
              } />
              
              <Route 
                path="/admin" 
                element={
                  <div className="page-wrapper">
                    <RequireAuth>
                      <Admin onAdd={handleAddProduct} />
                    </RequireAuth>
                    <Footer />
                  </div>
                } 
              />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;