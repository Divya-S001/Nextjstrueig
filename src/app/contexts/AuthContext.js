"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const mockUsers = [
    {
      name: "Admin User",
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    },
    {
      name: "User1",
      email: "user1@example.com",
      password: "password123",
      role: "user",
    },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = ({ name, email, password }) => {
    const existingUser = mockUsers.find((u) => u.email === email);

    if (existingUser) {
      if (existingUser.password === password) {
        setUser(existingUser);
        localStorage.setItem("user", JSON.stringify(existingUser));
       
       
        alert("login successful!");
        router.push("/protected");
      } 
      
      else {

        alert("invalid credentials!");
      }
    } 
    
    else {
      const newUser = { name, email, password, role: "user" };
      mockUsers.push(newUser);
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
     
      alert("registration successful!");
      router.push("/protected");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
