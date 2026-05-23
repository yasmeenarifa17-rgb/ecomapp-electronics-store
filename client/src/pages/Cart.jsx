function Cart({ cart, setCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                marginBottom: "20px",
                padding: "15px",
                borderRadius: "10px",
                background: "white",
              }}
            >
              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total Price: ₹{totalPrice}</h2>

          <button
            style={{
              padding: "12px 20px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;