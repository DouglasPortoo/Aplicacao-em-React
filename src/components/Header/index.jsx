import { Container,Menu } from "./styles"
import { FiSearch } from 'react-icons/fi'

import {Input} from "../Input"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useContext"

export const Header = () => {

  const {singOut} = useAuth()

  function handleSingOut(){
    singOut()
  }

  return (
    <Container>
      <Link to="/">
      <h1>RocketMovies</h1>
      </Link>
      <Input type="text" placeholder="Pesquise pelo titulo" icon={FiSearch} />

      <Menu>
        <div>
        <p>Douglas Porto</p>
        <span onClick={handleSingOut }>sair</span>
        </div>
        <Link to="/profile" >
          <img src="https://github.com/DouglasPortoo.png" alt="foto do usuario" />
        </Link>
      </Menu>
    </Container>
  )
}
