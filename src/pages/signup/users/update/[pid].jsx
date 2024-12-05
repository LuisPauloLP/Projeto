import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import MenuUsers from '@/components/signup/MenuUsers';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function UpdateUser() {
  const API_URL = "http://localhost:5050/api/users/";
  const [user, setUser] = useState({
    author_name: "",
    author_email: "",
    author_user: "",
    author_pwd: "",
    author_level: "",
    author_status: "",
    author_create_date: "",
  });
  const [message, setMessage] = useState({ message: "", status: "" });
  const { pid } = useParams();
  const navigate = useNavigate();

  const optionsLevel = [
    { value: '', text: '-- Selecione um nível de acesso --' },
    { value: 'admin', text: 'Administrador' },
    { value: 'user', text: 'Usuário' },
    { value: 'reader', text: 'Leitor' },
  ];

  const optionsStatus = [
    { value: '', text: '-- Selecione um estado --' },
    { value: 'true', text: 'Ativo' },
    { value: 'false', text: 'Inativo' },
  ];

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await Axios.get(`${API_URL}${pid}`);
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao carregar o usuário:', error);
        setMessage({ message: "Erro ao carregar os dados do usuário.", status: "error" });
      }
    };
    getUser();
  }, [pid]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      const response = await Axios.put(`${API_URL}${pid}`, user);
      setMessage({ message: response.data.message, status: "success" });
      setTimeout(() => navigate('/signup/users'), 2000);
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
      setMessage({ message: "Erro ao atualizar o usuário.", status: "error" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Editar Usuário</title>
      </Helmet>
      <div id="nav-signup">
        <div className="body_users">
          <MenuUsers />
          {message.message && (
            <div
              className={`alert ${message.status === "success" ? "alert-success" : "alert-danger"}`}
              role="alert"
            >
              {message.message}{" "}
              <Link className="alert-link" to="/signup/users">
                Voltar
              </Link>
            </div>
          )}
          <div className="container">
            <div className="row border-bottom">
              <h3>Editar Usuário</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="author_name">Nome</label>
                  <input
                    type="text"
                    id="author_name"
                    name="author_name"
                    className="form-control"
                    value={user.author_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_email">E-mail</label>
                  <input
                    type="text"
                    id="author_email"
                    name="author_email"
                    className="form-control"
                    value={user.author_email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_user">Usuário</label>
                  <input
                    type="text"
                    id="author_user"
                    name="author_user"
                    className="form-control"
                    value={user.author_user}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_pwd">Senha</label>
                  <input
                    type="password"
                    id="author_pwd"
                    name="author_pwd"
                    className="form-control"
                    value={user.author_pwd}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_level">Nível</label>
                  <select
                    id="author_level"
                    name="author_level"
                    className="form-select"
                    value={user.author_level}
                    onChange={handleChange}
                  >
                    {optionsLevel.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="author_status">Status</label>
                  <select
                    id="author_status"
                    name="author_status"
                    className="form-select"
                    value={user.author_status}
                    onChange={handleChange}
                  >
                    {optionsStatus.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="author_create_date">Data de Criação</label>
                  <input
                    type="text"
                    id="author_create_date"
                    name="author_create_date"
                    className="form-control"
                    value={user.author_create_date}
                    readOnly
                  />
                </div>
                <div className="form-group p-2">
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={handleUpdateUser}
                  >
                    Salvar
                  </button>
                  <Link className="btn btn-outline-info" to="/signup/users">
                    Voltar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
