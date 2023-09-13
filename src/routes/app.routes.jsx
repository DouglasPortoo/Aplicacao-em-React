import {Routes, Route} from "react-router-dom"  

import {Home} from "../pages/Home"
import {Details} from "../pages/Details"
import {Profile} from "../pages/Profile"
import {CreateMovie} from "../pages/CreateMovie"

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new" element={<CreateMovie/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
  )
}