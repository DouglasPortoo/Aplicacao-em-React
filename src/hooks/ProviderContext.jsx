import { createContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function SingIn({email,password}){

    try {
      const response = await api.post("/sessions",{email,password})
      const {user, token} = response.data

      localStorage.setItem("@MovieNotes:user",JSON.stringify(user))
      localStorage.setItem("@MovieNotes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({user,token})

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{SingIn, user: data.user}}
    >
      {children}
    </AuthContext.Provider>
  );
}
