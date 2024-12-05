import MenuUsers from '@/components/signup/MenuUsers';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

export default function DeleteUser() {
  const API_URL = "http://localhost:5050/api/users/";
  const [user, setUser] = useState(null); // Inicializa como null para lidar com o carregamento
  const [message, setMessage] = useState({ message: "", status: "" }); // Estado para mensagens
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
    const fetchUser = async () => {
      try {
        const response = await Axios.get(`${API_URL}${pid}`);
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao carregar o usuário:', error);
        setMessage({ message: "Erro ao carregar os dados do usuário.", status: "error" });
      }
    };
    fetchUser();
  }, [pid]);

  const handleDeleteUser = async () => {
    try {
      const response = await Axios.delete(`${API_URL}${pid}`);
      setMessage({ message: response.data.message, status: "ok" });
      navigate("/signup/users");
    } catch (error) {
      console.error("Erro ao deletar o Usuário:", error);
      setMessage({ message: "Erro ao deletar o Usuário!", status: "error" });
    }
  };

  if (!user) {
    return (
      <div>
        <h3>Carregando...</h3>
        {message.status === "error" && (
          <div className="alert alert-danger" role="alert">
            {message.message} <Link to="/signup/users">Voltar</Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Deletar Usuário</title>
        <meta name="description" content="Deletar cadastro de usuário" />
      </Helmet>
      <div id="nav-signup">
        <div className="body_users">
          <MenuUsers />
          {message.status && (
            <div
              className={`alert ${
                message.status === "ok" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {message.message} <Link to="/signup/users">Voltar</Link>
            </div>
          )}
          <div className="container">
            <div className="row border-bottom">
              <h3>Detalhes do Usuário</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="author_name">Nome</label>
                  <input
                    type="text"
                    id="author_name"
                    name="author_name"
                    className="form-control"
                    value={user.author_name || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_email">E-mail</label>
                  <input
                    type="text"
                    id="author_email"
                    name="author_email"
                    className="form-control"
                    value={user.author_email || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_user">Usuário</label>
                  <input
                    type="text"
                    id="author_user"
                    name="author_user"
                    className="form-control"
                    value={user.author_user || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_pwd">Senha</label>
                  <input
                    type="password"
                    id="author_pwd"
                    name="author_pwd"
                    className="form-control"
                    value={user.author_pwd || ""}
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="author_level">Nível</label>
                  <select
                    className="form-select"
                    id="author_level"
                    name="author_level"
                    value={user.author_level || ""}
                    readOnly
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
                    className="form-select"
                    id="author_status"
                    name="author_status"
                    value={user.author_status || ""}
                    readOnly
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
                    value={user.author_create_date || ""}
                    readOnly
                  />
                </div>
                <div className="form-group p-2">
                  <button
                    className="btn btn-outline-danger"
                    type="button"
                    onClick={handleDeleteUser}
                  >
                    Deletar
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
