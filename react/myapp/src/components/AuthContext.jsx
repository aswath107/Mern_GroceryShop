import React, { createContext, useState } from "react";

export const AuthContext = createContext(); // Create AuthContext

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State for logged-in user
  const [registeredUsers, setRegisteredUsers] = useState([]); // State to store registered users

  // Register function to add a new user
  const register = (userData) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, userData]); // Add new user to registeredUsers
    console.log("Registered Users:", registeredUsers); // Log registered users for debugging
  };

  // Login function to set the logged-in user
  const login = (userData) => {
    const user = registeredUsers.find(
      (u) => u.email === userData.email && u.password === userData.password
    );
    if (user) {
      setUser(user); // Set the logged-in user
      console.log("Login successful:", user); // Log success for debugging
    } else {
      console.log("Login failed: Invalid credentials"); // Log failure for debugging
    }
  };

  // Logout function to clear the logged-in user
  const logout = () => {
    setUser(null); // Clear the logged-in user
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};