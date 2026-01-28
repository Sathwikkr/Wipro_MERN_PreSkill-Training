import { useState } from "react";

function Admin({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    price: "" // 1. We track price in the state
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation (Check if Name, Image AND Price are filled)
    if (!formData.name || !formData.img || !formData.price) {
      alert("Please fill in all fields");
      return;
    }

    const newProduct = {
      name: formData.name,
      img: formData.img, 
      price: Number(formData.price) // 2. Convert string "100" to number 100
    };
    
    onAdd(newProduct);
    setFormData({ name: "", img: "", price: "" }); // Clear form
    alert("Product added successfully!");
  };

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h2>Admin Panel</h2>
      <p>Add a new product to the shop</p>

      <form 
        onSubmit={handleSubmit}
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "15px", 
          maxWidth: "400px", 
          margin: "30px auto", 
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff"
        }}
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name (e.g., Red Jacket)" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        
        <input 
          type="text" 
          name="img" 
          placeholder="Image URL (e.g., /images/jacket.jpg)" 
          value={formData.img} 
          onChange={handleChange} 
          required 
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />

        {/* 3. New Price Input Field */}
        <input 
          type="number" 
          name="price" 
          placeholder="Price (e.g., 50)" 
          value={formData.price} 
          onChange={handleChange} 
          required 
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />

        <button 
          type="submit" 
          style={{ 
            padding: "10px", 
            backgroundColor: "#28a745", 
            color: "white", 
            border: "none", 
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "4px"
          }}
        >
          Add Product
        </button>
      </form>
    </section>
  );
}

export default Admin;