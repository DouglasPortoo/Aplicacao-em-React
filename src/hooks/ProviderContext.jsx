import { createContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        name: "Douglas",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
