// src/Components/Cart.jsx
import { Link } from "react-router-dom";

function Cart({ cartItems, onRemove }) {
  // Calculate total price (Assuming $50 per item)
  const totalPrice = cartItems.length * 50; 

  return (
    <section className="cart" style={{ padding: "50px", minHeight: "60vh", textAlign: "center" }}>
      <h2>Your Shopping Cart</h2>
      
      {/* 1. Empty Cart State */}
      {cartItems.length === 0 ? (
        <div style={{ marginTop: "40px" }}>
          <p style={{ fontSize: "1.2rem", color: "#666" }}>Your cart is empty.</p>
          <Link to="/shop">
            <button style={{ 
              marginTop: "20px",
              padding: "10px 25px", 
              background: "#007bff", 
              color: "white", 
              border: "none", 
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Go Shopping
            </button>
          </Link>
        </div>
      ) : (
        /* 2. Cart Items List */
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
                
                {/* Product Image & Name */}
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} 
                  />
                  <div style={{ textAlign: "left" }}>
                    <h4 style={{ margin: "0 0 5px 0" }}>{item.name}</h4>
                    <p style={{ margin: 0, color: "#888" }}>$50.00</p> 
                  </div>
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
          
          {/* 3. Total Price & Checkout */}
          <div style={{ marginTop: "30px", textAlign: "right", borderTop: "2px solid #eee", paddingTop: "20px" }}>
             <h3>Total: <span style={{ color: "#28a745" }}>${totalPrice}.00</span></h3>
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