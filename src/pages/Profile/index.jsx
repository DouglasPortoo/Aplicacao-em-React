import { Avatar, Container, Form } from "./style";

import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useContext";
import { useState } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../../assets/semfoto.svg";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      oldPassword: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updatedProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={`foto do ${user.name}`} />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          value={name}
          type="text"
          icon={BsFillPersonFill}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          type="email"
          icon={AiOutlineMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FaLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FaLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
