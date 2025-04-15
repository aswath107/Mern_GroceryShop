// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("Customer");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:8000/api/auth/login", {
//         email,
//         password,
//         role,
//       });

//       if (res.data.user) {
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         navigate("/");
//       }
//     } catch (err) {
//       console.error("Login Error:", err.response?.data?.error || err.message);
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="Customer">Customer</option>
//           <option value="Vendor">Vendor</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // ✅ Ensure this is correctly imported

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
        role,
      });
  
      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
  
        // 🔹 Navigate based on role
        if (res.data.user.role === "Customer") {
          navigate("/");
        } else if (res.data.user.role === "Vendor") {
          navigate("/vendor");
        } else if (res.data.user.role === "Admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/"); // Default fallback
        }
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data?.error || err.message);
      alert(err.response?.data?.error || "Login failed");
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Customer">Customer</option>
          <option value="Vendor">Vendor</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
