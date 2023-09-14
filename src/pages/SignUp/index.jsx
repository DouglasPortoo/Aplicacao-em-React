import { Container, Form, Backgroud } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";


export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const usenavigate= useNavigate()

  async function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

   try {

    api.post("/users", {name,email,password})
    alert("Cadastrado com sucesso")

    usenavigate("/")
    
   } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    } else {
      alert("Não foi possível cadastrar.");
    }
   }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          type="text"
          placeholder="Nome"
          icon={BsFillPersonFill}
          onChange={(e) => setName(e.target.value)}
        />

        <Input type="email" placeholder="E-mail" icon={AiOutlineMail} onChange={(e) => setEmail(e.target.value)} />

        <Input type="password" placeholder="Senha" icon={FaLock} onChange={(e) => setPassword(e.target.value)} />

        <Button title="Cadastrar" onClick={handleRegister} />

        <Link to="/">
          <ButtonText title="Voltar para o login" />
        </Link>
      </Form>

      <Backgroud />
    </Container>
  );
}
