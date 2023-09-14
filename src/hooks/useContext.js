import { useContext } from "react";
import { AuthContext } from "./ProviderContext";

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}