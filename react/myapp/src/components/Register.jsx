// import React, { useState } from "react";
// import "./Register.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     alert("Registration Successful!");
//     setError("");
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <h2 className="register-header">Register</h2>
//         {error && <p className="error-text">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="register-button">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Register.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "Customer", // Default role
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:8000/api/auth/register", {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         role: formData.role, // Send role
//       });

//       localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user in localStorage
//       alert("Registration Successful!");
//       navigate("/Login"); // Redirect after registration
//     } catch (error) {
//       setError(error.response?.data?.error || "Registration Failed");
//     }
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <h2 className="register-header">Register</h2>
//         {error && <p className="error-text">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Name</label>
//             <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
//           </div>
//           <div className="input-group">
//             <label>Confirm Password</label>
//             <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
//           </div>
//           <div className="input-group">
//             <label>Role</label>
//             <select name="role" value={formData.role} onChange={handleChange} required>
//               <option value="Customer">Customer</option>
//               <option value="Vendor">Vendor</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>
//           <button type="submit" className="register-button">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Register.css"; // Import the CSS file

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("Customer");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:8000/api/auth/register", { 
//         name, email, password, role 
//       });
//       alert("Registration successful! Please log in.");
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration Error:", err.response?.data?.error || err.message);
//       alert(err.response?.data?.error || "Registration failed");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2 className="register-title">Register</h2>
//       <form className="register-form" onSubmit={handleRegister}>
//         <input 
//           className="register-input" 
//           type="text" 
//           placeholder="Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           required 
//         />
//         <input 
//           className="register-input" 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           className="register-input" 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <select 
//           className="register-select" 
//           value={role} 
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="Customer">Customer</option>
//           <option value="Vendor">Vendor</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button className="register-button" type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css"; // Import CSS file

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Customer");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      alert(response.data.message || "Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err.response?.data?.error || err.message);
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleRegister}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Customer">Customer</option>
          <option value="Vendor">Vendor</option>
          <option value="Admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
