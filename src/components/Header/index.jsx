import { Container,Menu } from "./styles"
import { FiSearch } from 'react-icons/fi'

import {Input} from "../Input"

export const Header = () => {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input type="text" placeholder="Pesquise pelo titulo" icon={FiSearch} />

      <Menu>
        <div>
        <p>Douglas Porto</p>
        <span>sair</span>
        </div>
        
        <img src="https://github.com/DouglasPortoo.png" alt="foto do usuario" />
      </Menu>
    </Container>
  )
}
