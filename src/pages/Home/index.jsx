import { Container, Content } from "./style";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useContext";

export const Home = () => {
  const { search  } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <h1>Meus filmes</h1>
            <Link to="/new">
              <Button title="+ Adicionar filme" />
            </Link>
          </div>
          {notes.map((note) => (
            <Card key={note.id} data={note} />
          ))}
        </Content>
      </main>
    </Container>
  );
};
