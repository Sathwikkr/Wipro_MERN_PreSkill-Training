// src/Components/Products.jsx
function Products({ products, onAddToCart, onDelete }) {
  return (
    <section className="products">
      <h2>Sale Products</h2>
      <div className="product-grid">
        {/* Check if products are loading */}
        {products.length === 0 && <p>Loading products...</p>}

        {/* This "map" loop creates a card for every item in your database */}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p style={{ color: "#888", marginBottom: "10px" }}>$50.00</p>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              {/* THIS IS THE MISSING BUTTON */}
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