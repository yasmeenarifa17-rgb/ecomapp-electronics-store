import { useEffect, useState } from "react";


function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const productsData = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 65999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      description: "High performance gaming laptop",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "Premium wireless headphones",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Modern smartwatch",
    },
  ];

  setProducts(productsData);
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