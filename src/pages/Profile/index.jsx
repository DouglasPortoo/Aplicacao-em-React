import { Container, Form,Avatar } from "./style";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <ButtonText title="voltar" />
        </a>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/DouglasPortoo.png"
            alt="foto do usuario"
          />
          <label htmlFor="avatar">
          <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={BsFillPersonFill} />
        <Input placeholder="Email" type="email" icon={AiOutlineMail} />
        <Input placeholder="Senha atual" type="password" icon={FaLock} />
        <Input placeholder="Nova senha" type="password" icon={FaLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
