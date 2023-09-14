import {BrowserRouter} from "react-router-dom"

import {AppRoutes} from "./app.routes"
import {AuthRoutes} from "./auth.routes"

import { useAuth } from "../hooks/useContext";

export function Routes(){

  const { name } = useAuth();

  console.log(name)
  return(
    <BrowserRouter>
    <AuthRoutes/>
    </BrowserRouter>
  )
}