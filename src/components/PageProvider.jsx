import { createContext, useState } from "react";

export const PageContext = createContext();

export default function PageProvider({ children }) {
  const [page, setPage] = useState("dashboard");

  // Move the user state here so every component can access it
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Centralized logout logic
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null); // This triggers the re-render back to Login
    setPage("dashboard"); // Optional: Reset view for next login
  };

  // Centralized login logic
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <div className="contents">
      <PageContext.Provider value={{ page, setPage, user, login, logout }}>
        {children}
      </PageContext.Provider>
    </div>
  );
}
