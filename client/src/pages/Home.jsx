import { useEffect, useState } from "react";
import axios from "axios";

function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "40px", color: "#111" }}>
        EcomApp Electronics
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h2 style={{ color: "#111" }}>{product.name}</h2>

            <p style={{ color: "#555" }}>{product.description}</p>

            <h3 style={{ color: "#000" }}>₹{product.price}</h3>

            <button
              onClick={() => addToCart(product)}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#111",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;