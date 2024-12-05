import MenuUsers from '@/components/signup/MenuUsers';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function ReadUser() {
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

  // Fetch do usuário com useEffect
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Axios.get(`http://localhost:5050/api/users/${pid}`);
        setUser(response.data); // Define os dados do usuário
      } catch (error) {
        console.error('Erro ao carregar o usuário:', error);
        setMessage({ message: "Erro ao carregar os dados do usuário.", status: "error" });
      }
    };
    fetchUser();
  }, [pid]);

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
        <title>Cadastros</title>
        <meta name="description" content="Cadastro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div id="nav-signup">
        <div className="body_users">  <MenuUsers />
        <div className="container">
          <div className="row border-bottom">
            <h3>Detalhes do Usuário</h3>
            <form>
              <div className="form-group">
                <label htmlFor="author_name">Nome</label>
                <input type="text" id="author_name" name="author_name" className="form-control" value={user.author_name || ""} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="author_email">E-mail</label>
                <input type="text" id="author_email" name="author_email" className="form-control" value={user.author_email || ""} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="author_user">Usuário</label>
                <input type="text" id="author_user" name="author_user" className="form-control" value={user.author_user || ""} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="author_pwd">Senha</label>
                <input type="password" id="author_pwd" name="author_pwd" className="form-control" value={user.author_pwd || ""} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="author_level">Nível</label>
                <select className="form-select" id="author_level" name="author_level" value={user.author_level || ""} readOnly>
                  {optionsLevel.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="author_status">Status</label>
                <select className="form-select" id="author_status" name="author_status" value={user.author_status || ""} readOnly>
                  {optionsStatus.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="author_create_date">Data de Criação</label>
                <input type="text" id="author_create_date" name="author_create_date" className="form-control" value={user.author_create_date || ""} readOnly />
              </div>
              <div className="form-group p-2">
                <Link className="btn btn-outline-info" to="/signup/users">Voltar</Link>
              </div>
            </form>
          </div>
         </div> 
        </div>
      </div>
    </>
  );
}
