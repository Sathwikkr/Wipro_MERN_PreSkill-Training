import React from 'react';
import { Link } from "react-router-dom";

// 1. Accept 'onUpdateQuantity' prop
function Cart({ cartItems, onRemove, onUpdateQuantity }) {
  
  // 2. Calculate Total: Price * Quantity
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.price ? Number(item.price) : 50;
    const quantity = item.quantity || 1;
    return total + (price * quantity);
  }, 0);

  return (
    <section className="cart" style={{ padding: "50px", minHeight: "60vh", textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px" }}>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div style={{ marginTop: "40px" }}>
          <p style={{ fontSize: "1.2rem", color: "#666" }}>Your cart is empty.</p>
          <Link to="/shop">
            <button style={{ 
              marginTop: "20px", padding: "10px 25px", background: "var(--primary)", 
              color: "white", border: "none", borderRadius: "5px", cursor: "pointer"
            }}>
              Go Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  borderBottom: "1px solid #ddd", 
                  padding: "15px 0"
                }}>
                
                {/* Product Info */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flex: 1 }}>
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} 
                  />
                  <div style={{ textAlign: "left" }}>
                    <h4 style={{ margin: "0 0 5px 0" }}>{item.name}</h4>
                    <p style={{ margin: 0, color: "#888" }}>
                       ${item.price ? item.price : 50}
                    </p> 
                  </div>
                </div>

                {/* 3. NEW: Quantity Controls */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "0 20px" }}>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    style={{ 
                      width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #ccc", 
                      background: "white", cursor: "pointer", fontWeight: "bold"
                    }}
                  >
                    -
                  </button>
                  
                  <span style={{ fontWeight: "bold", minWidth: "20px" }}>{item.quantity || 1}</span>
                  
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    style={{ 
                      width: "30px", height: "30px", borderRadius: "50%", border: "1px solid #ccc", 
                      background: "white", cursor: "pointer", fontWeight: "bold"
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => onRemove(index)}
                  style={{ 
                    background: "#ff4444", 
                    color: "white", 
                    border: "none", 
                    padding: "8px 12px", 
                    borderRadius: "5px", 
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: "30px", textAlign: "right", borderTop: "2px solid #eee", paddingTop: "20px" }}>
             <h3>Total: <span style={{ color: "#28a745" }}>${totalPrice}</span></h3>
             <button style={{ 
               padding: "12px 30px", 
               background: "#28a745", 
               color: "white", 
               border: "none", 
               fontSize: "1.1rem", 
               cursor: "pointer", 
               marginTop: "10px",
               borderRadius: "5px"
             }}>
               Proceed to Checkout
             </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
