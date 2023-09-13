import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <a href="/">
            <ButtonText title="Voltar" />
          </a>
          <h1>Novo Filme</h1>

          <div className="input">
            <Input placeholder="Titulo" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </div>

          <textarea
            placeholder="Observações"
            cols="30"
            rows="10"
          ></textarea>

          <h2>Marcadores</h2>

          <section>
            <MovieItem placeholder="Novo marcador" isNew />
            <MovieItem value="Drama" />
 

          </section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
