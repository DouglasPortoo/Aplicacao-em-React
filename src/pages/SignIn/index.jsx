import { Container, Form,Backgroud } from "./style";
import { Input } from "../../components/Input";
import {Button} from "../../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useContext";
import { useState } from "react";


export function SingIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {SingIn} = useAuth()

  function handleSingIn(){
    SingIn({email,password})
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
        type="text" 
        placeholder="E-mail" 
        icon={AiOutlineMail}
        onChange={(e)=> setEmail(e.target.value)}
        />

        <Input 
        type="password" 
        placeholder="Senha" 
        icon={FaLock}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSingIn} />
        
        <Link to="/register">
        Criar conta
      </Link>
      </Form>
      <Backgroud/>
      
    </Container>
  );
}
