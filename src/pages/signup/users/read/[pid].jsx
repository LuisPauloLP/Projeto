import MenuUsers from '@/components/signup/MenuUsers';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function readuser() {
  
  const API_URL = "http://localhost:5050/api/users/"

  const [user, setUser] = useState({
    author_id: "",
    author_name: "",
    author_email: "",
    author_user: "",
    author_pwd: "",
    author_level: "",
    author_status: "",
    author_create_date: ""
  });

  const navigate = useNavigate();
  const { pid } = useParams();


  const [message, setMensage] = useState({ message:"", status:""});

  const optionsLevel = [
    {value: '', text: '-- Selecione um nível de acesso --'},
    {value: 'admin', text: 'Administrador'},
    {value: 'user', text: 'Usuário'},
    {value: 'reader', text: 'Leitor'},
  ];

  const optionsStatus = [
    {value: '', text: '-- Selecione um estado --'},
    {value: 'true', text: 'Ativo'},
    {value: 'false', text: 'Inativo'},
  ];


     useEffect(() => {
        const getUser = async () => {
          try {
            const response = await Axios.get(API_URL + pid);
            setMensage( { message: response.data.message , status: "ok"} ); 
            setUser( response.data.foundedUser );
          } catch (error) {
            console.error('Erro ao buscar os usuários:', error);
            setMensage( { message: "Erro ao buscar os Usuários!", status: "error"} );
          }
        };
    
        getUser();
    
      }, []);



  return (
    <>
      <Helmet>
        <title>Cadastros</title>
        <meta name="description" content="Cadastro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div id="nav-signup">
        { 
          message.status==="" ? "" : 
          message.status==="ok" ? "" : 
          <div className='alert alert-danger' role='alert'> { message.message } <Link className='alert-link' to='/signup/users'>Voltar</Link></div>
        }
  
      <div className="body_users">
      <MenuUsers />
        <div className="container">
            <div className="row border-bottom">
                <h3> Detalhes do Usuário </h3>
            
                <form >
                <div className="form-group">
                    <label className="form-label" htmlFor="author_name">Nome</label>
                    <input type="text" id="author_name" name="author_name" className="form-control" value={user.author_name} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_email">E-mail</label>
                    <input type="text" id="author_email" name="author_email" className="form-control" value={user.author_email} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_user">Usuário</label>
                    <input type="text" id="author_user" name="author_user" className="form-control" value={user.author_user} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_pwd">Senha</label>
                    <input type="password" id="author_pwd" name="author_pwd" className="form-control" value={user.author_pwd} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_level">Nível</label>
                    <select className="form-select" id="author_level" name="author_level" value={user.author_level} readOnly>
                      {optionsLevel.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_status">Status</label>
                    <select className="form-select" id="author_status" name="author_status" value={user.author_status} readOnly>
                      {optionsStatus.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_create_date">Data de Criação</label>
                    <input type="text" id="author_create_date" name="author_create_date" className="form-control" value={ user.author_create_date } readOnly/>
                </div>
                <div className="form-group p-2">
                    {/* <button className="btn btn-outline-success" type="button" onClick={handleCreateUser} >Salvar</button> */}
                    <Link className="btn btn-outline-info" to="/signup/users">Voltar</Link>
                </div>
                </form>
            </div>
        </div>
      </div>  
      </div>
  </>
  )
}

