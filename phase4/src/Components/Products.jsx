// src/Components/Products.jsx
function Products({ products, onAddToCart, onDelete }) {
  return (
    <section className="products" style={{ padding: "40px 0" }}>
      
      {/* 👇 FIX: Added style to center the text */}
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "2rem", 
        fontWeight: "bold", 
        marginBottom: "30px",
        color: "#333" 
      }}>
        Sale Products
      </h2>

      <div className="product-grid">
        {products.length === 0 && <p style={{ textAlign: "center", width: "100%" }}>Loading products...</p>}

        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <p style={{ fontWeight: "bold", fontSize: "1.1rem", margin: "10px 0" }}>{product.name}</p>
            
            {/* Price Display */}
            <p style={{ color: "#888", marginBottom: "15px" }}>${product.price}</p>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button 
                onClick={() => onAddToCart(product)} 
                style={{ background: "#007bff", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;