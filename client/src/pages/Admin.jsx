function Admin() {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    return <h1 style={{ padding: "30px" }}>Access Denied</h1>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <p>Manage Products</p>

      <button
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default Admin;