import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    email === "admin@gmail.com" &&
    password === "admin123"
  ) {
    localStorage.setItem("role", "admin");

    alert("Admin Login Successful");

    navigate("/admin");
  } else if (
    storedUser &&
    email === storedUser.email &&
    password === storedUser.password
  ) {
    localStorage.setItem("role", "user");

    alert("User Login Successful");

    navigate("/");
  } else {
    alert("Invalid Credentials");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "10px",
          width: "300px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          background: "#111",
          color: "white",
          border: "none",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;