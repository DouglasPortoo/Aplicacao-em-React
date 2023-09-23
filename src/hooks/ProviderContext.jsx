import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import PropTypes from "prop-types";

export const AuthContext = createContext({});
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem("@MovieNotes:user", JSON.stringify(user));
      localStorage.setItem("@MovieNotes:token", token);


      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  function singOut() {
    localStorage.removeItem("@MovieNotes:user");
    localStorage.removeItem("@MovieNotes:token");

    setData({});
  }

  async function updatedProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data[0].avatar;
      }

      await api.put("/users", user);

      localStorage.setItem("@MovieNotes:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });

      alert("Perfil atualizado!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@MovieNotes:user");
    const token = localStorage.getItem("@MovieNotes:token");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

      setData({
        token,
        user: JSON.parse(user),
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        singIn,
        singOut,
        updatedProfile,
        search,
        setSearch,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
