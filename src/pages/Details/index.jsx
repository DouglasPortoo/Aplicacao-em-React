import { Container, Content } from "./style";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";

import { FiClock } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../../assets/semfoto.svg";

import { useAuth } from "../../hooks/useContext";

export const Details = () => {
  const { user } = useAuth();

  const [data, setData] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [params.id]);

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Voltar" onClick={handleBack} />

          <h2>{data.title}</h2>

          <section>
            <img src={avatarUrl} alt="" />
            <p>{user.name}</p>
            <FiClock />
            <span>{data.created_at}</span>
          </section>

          {data.tag &&
            data.tag.map((tag, index) => <Tag key={index} title={tag.name} />)}
          <h3>{data.description}</h3>
          <Button title="Excluir" onClick={handleRemove} />
        </Content>
      </main>
    </Container>
  );
};
