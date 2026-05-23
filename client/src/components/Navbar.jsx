import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        background: "#111",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>EcomApp</h2>

      <div style={{ display: "flex", gap: "20px" }}>
  <Link to="/" style={{ color: "white", textDecoration: "none" }}>
    Home
  </Link>

  <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
    Login
  </Link>

  <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
    Signup
  </Link>

  <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
    Admin
  </Link>

  <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
    Cart ({cartCount})
  </Link>
</div>
    </nav>
  );
}

export default Navbar;