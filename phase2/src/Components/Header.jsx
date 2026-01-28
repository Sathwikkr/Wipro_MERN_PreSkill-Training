import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#c8e1f4",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>SASA</h2>
      <nav>
        {/* 'to' prop must match the 'path' in App.jsx */}
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/">Home</Link>
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/shop">Shop</Link> {/* Changed from /products to /shop */}
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/contact">Contact</Link>
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/cart">Cart</Link>
        <Link style={{ marginLeft: "20px", textDecoration: 'none', color: 'black' }} to="/admin">Admin</Link>
      </nav>
     
    </header>
  );
}

export default Header;