import { createContext, useEffect, useState } from "react";
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

  useEffect(() => {
   const user = localStorage.getItem("@MovieNotes:user")
   const token = localStorage.getItem("@MovieNotes:token")

   if(user && token){
    api.defaults.headers.authorization = `Bearer ${token}`;
    
    setData({
      token,
      user: JSON.parse(user)
    });
   }

  }, [])
  

  return (
    <AuthContext.Provider
      value={{SingIn, user: data.user}}
    >
      {children}
    </AuthContext.Provider>
  );
}
