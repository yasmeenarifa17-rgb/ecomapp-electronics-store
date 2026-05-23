import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful");

    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Signup</h1>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "10px",
          width: "300px",
        }}
      />

      <input
        type="email"
        placeholder="Email"
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
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          padding: "10px",
          width: "300px",
        }}
      />

      <button
        onClick={handleSignup}
        style={{
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
        }}
      >
        Signup
      </button>
    </div>
  );
}

export default Signup;