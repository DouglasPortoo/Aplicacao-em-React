import { Container, Menu } from "./styles";
import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useContext";

import { useNavigate } from "react-router-dom";


export const Header = () => {
  const { singOut,setSearch } = useAuth();

  const navigate = useNavigate();

  function handleSingOut() {
    singOut();
    navigate("/");

  }

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>
      <Input
        type="text"
        placeholder="Pesquise pelo titulo"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Menu>
        <div>
          <p>Douglas Porto</p>
          <span onClick={handleSingOut}>sair</span>
        </div>
        <Link to="/profile">
          <img
            src="https://github.com/DouglasPortoo.png"
            alt="foto do usuario"
          />
        </Link>
      </Menu>
    </Container>
  );
};
