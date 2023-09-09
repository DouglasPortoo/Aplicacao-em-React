import { Container } from "./style";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Button title={"Entrar"} />
    </Container>
  );
};

export default Home;
