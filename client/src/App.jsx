import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";

import Navbar from "./components/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} setCart={setCart} />}
        />

        <Route
  path="/cart"
  element={<Cart cart={cart} setCart={setCart} />}
/>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;