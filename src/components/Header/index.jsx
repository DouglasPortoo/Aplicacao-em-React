import { Container,Menu } from "./styles"

export const Header = () => {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquise pelo titulo" />

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

export default Header