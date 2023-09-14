import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MovieItem } from "../../components/MovieItem";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link to="/">
            <ButtonText title="Voltar" />
          </Link>
          <h1>Novo Filme</h1>

          <div className="input">
            <Input
              placeholder="Titulo"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota(de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Observações"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <h2>Marcadores</h2>

          <section>
          <MovieItem
              placeholder="Novo marcador"
              isNew
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />

            {tags.map((tag, index) => (
              <MovieItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            
          </section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
