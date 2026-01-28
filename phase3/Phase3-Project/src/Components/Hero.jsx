// components/Hero.jsx
import { Link } from "react-router-dom";

function Hero() {
  return (
   <section
      className="hero"
      style={{
        backgroundImage: "url('/images/shopBG.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >      
      <div className="hero-content">
        <h1>SUMMER COLLECTION</h1>
        <p>Cool clothes up to 50% OFF</p>
        
        {/* Updated Button to Link to Shop */}
        <Link to="/shop">
          <button style={{ cursor: "pointer" }}>SHOP NOW</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;