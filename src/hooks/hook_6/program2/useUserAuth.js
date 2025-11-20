import { useState, useDebugValue } from "react";

export default function useUserAuth() {
  const [user, setUser] = useState(null);

  // Debug in React DevTools
  useDebugValue(user ? "Logged In" : "Logged Out");

  const login = () => {
    setUser({ name: "John Doe" });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}
