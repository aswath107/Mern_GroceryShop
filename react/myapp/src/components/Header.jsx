// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./App1.css"; // Single CSS file for styling

// const Header = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null); // State for user data
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     onSearch(event.target.value);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user"); // Remove user from local storage
//     setUser(null);
//     alert("Logged out successfully");
//     navigate("/login");
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="/logo.webp" alt="GreenCart Logo" className="logo-image" />
//         GREEN CART
//       </div>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="search-input"
//         />
//         <button className="search-button">🔍</button>
//       </div>

//       <nav>
//         <ul className="nav-links">
//           <li><Link to="/">HOME</Link></li>
//           <li><Link to="/aboutus">ABOUT US</Link></li>
//           <li><Link to="/track-order">TRACK ORDER</Link></li>
//           <li><Link to="/categories">CATEGORIES</Link></li>
//           <li><Link to="/destination">DESTINATION</Link></li>
//           <li><Link to="/ShoppingCart">ShoppingCart</Link></li>
//         </ul>
//       </nav>

//       <div>
//         {user ? ( // If user is logged in
//           <div className="user-info">
//             <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
//             <span>{user.name}</span>
//             <button onClick={handleLogout} className="logout-button">LOGOUT</button>
//           </div>
//         ) : ( // If user is not logged in
//           <>
//             <button className="login-button" onClick={() => navigate("/login")}>LOGIN</button>
//             <button className="register-button" onClick={() => navigate("/register")}>REGISTER</button>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./App1.css"; // Import styles

// const Header = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//     onSearch(event.target.value);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token"); // Remove token as well
//     setUser(null);
//     alert("Logged out successfully");
//     navigate("/login");
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="/logo.webp" alt="GreenCart Logo" className="logo-image" />
//         GREEN CART
//       </div>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for products..."
//           value={searchQuery}
//           onChange={handleSearch}
//           className="search-input"
//         />
//         <button className="search-button">🔍</button>
//       </div>

//       <nav>
//         <ul className="nav-links">
//           <li><Link to="/">HOME</Link></li>
//           <li><Link to="/aboutus">ABOUT US</Link></li>
//           <li><Link to="/track-order">TRACK ORDER</Link></li>
//           <li><Link to="/categories">CATEGORIES</Link></li>
//           <li><Link to="/destination">DESTINATION</Link></li>
//           <li><Link to="/ShoppingCart">SHOPPING CART</Link></li>
//         </ul>
//       </nav>

//       <div>
//         {user ? (
//           <div className="user-info">
//             <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
//             <span>{user.name} ({user.role})</span> {/* Display User Role */}
//             <button onClick={handleLogout} className="logout-button">LOGOUT</button>
//           </div>
//         ) : (
//           <>
//             <button className="login-button" onClick={() => navigate("/login")}>LOGIN</button>
//             <button className="register-button" onClick={() => navigate("/register")}>REGISTER</button>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./App1.css";

// const Header = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     try {
//       const storedUser = localStorage.getItem("user");

//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         if (parsedUser && parsedUser.name && parsedUser.role) {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem("user"); // Remove corrupted data
//           setUser(null);
//         }
//       } else {
//         setUser(null);
//       }
//     } catch (error) {
//       console.error("Error parsing user data:", error);
//       localStorage.removeItem("user"); // Clear invalid data
//       setUser(null);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     alert("Logged out successfully");
//     navigate("/login");
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="/logo.webp" alt="GreenCart Logo" className="logo-image" />
//         GREEN CART
//       </div>

//       <nav>
//         <ul className="nav-links">
//           <li><Link to="/">HOME</Link></li>
//           <li><Link to="/aboutus">ABOUT US</Link></li>
//           <li><Link to="/track-order">TRACK ORDER</Link></li>
//           <li><Link to="/categories">CATEGORIES</Link></li>
//           <li><Link to="/destination">DESTINATION</Link></li>
//           <li><Link to="/ShoppingCart">SHOPPING CART</Link></li>
//         </ul>
//       </nav>

//       <div>
//         {user ? (
//           <div className="user-info">
//             <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
//             <span>{user.name} ({user.role})</span>
//             <button onClick={handleLogout} className="logout-button">LOGOUT</button>
//           </div>
//         ) : (
//           <>
//             <button className="login-button" onClick={() => navigate("/login")}>LOGIN</button>
//             <button className="register-button" onClick={() => navigate("/register")}>REGISTER</button>
//           </>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App1.css";

const Header = () => {
  const navigate = useNavigate();

  // ✅ Initialize user state directly from localStorage
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  });

  useEffect(() => {
    // ✅ Only update state if `localStorage` data changes
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (!user || user.email !== parsedUser.email) {
          setUser(parsedUser);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []); // ✅ Runs once on mount

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.webp" alt="GreenCart Logo" className="logo-image" />
        GREEN CART
      </div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/aboutus">ABOUT US</Link></li>
          <li><Link to="/track-order">TRACK ORDER</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
          <li><Link to="/destination">DESTINATION</Link></li>
          <li><Link to="/ShoppingCart">SHOPPING CART</Link></li>
        </ul>
      </nav>

      <div>
        {user ? (
          <div className="user-info">
            <img src="/profile-pic.png" alt="Profile" className="profile-pic" />
            <span>{user.name} ({user.role})</span>
            <button onClick={handleLogout} className="logout-button">LOGOUT</button>
          </div>
        ) : (
          <>
            <button className="login-button" onClick={() => navigate("/login")}>LOGIN</button>
            <button className="register-button" onClick={() => navigate("/register")}>REGISTER</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
