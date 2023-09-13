import { Container, Form,Backgroud } from "./style";
import { Input } from "../../components/Input";
import {Button} from "../../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


export function SingIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input 
        type="text" 
        placeholder="E-mail" 
        icon={AiOutlineMail}/>

        <Input 
        type="password" 
        placeholder="Senha" 
        icon={FaLock}/>

        <Button title="Entrar"/>
        
        <Link to="/register">
        Criar conta
      </Link>
      </Form>
      <Backgroud/>
      
    </Container>
  );
}
