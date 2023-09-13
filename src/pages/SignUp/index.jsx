import { Container, Form,Backgroud } from "./style";
import { Input } from "../../components/Input";
import {Button} from "../../components/Button";
import {ButtonText} from "../../components/ButtonText"
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from "react-router-dom";


export function SingUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
        type="text" 
        placeholder="Nome" 
        icon={BsFillPersonFill}/>

        <Input 
        type="email" 
        placeholder="E-mail" 
        icon={AiOutlineMail}/>

        <Input 
        type="password" 
        placeholder="Senha" 
        icon={FaLock}/>

        <Button title="Cadastrar"/>
        
        <Link to="/">
        <ButtonText title="Voltar para o login"/> 
      </Link>
      </Form>

      <Backgroud/>
      
    </Container>
  );
}
