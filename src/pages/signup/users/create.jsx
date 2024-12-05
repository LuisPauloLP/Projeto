import React from 'react';
import MenuUsers from '@/components/signup/MenuUsers';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export default function createuser() {
  
  const API_URL = "http://localhost:5050/api/users"

  const [user, setUser] = useState({
    // id: "",
    author_name: "",
    author_email: "",
    author_user: "",
    author_pwd: "",
    author_level: "",
    author_status: "",
    // author_create_date: ""
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleCreateUser = async () => {
    try {
      const response = await Axios.post(API_URL,  user );
      setMensage( { message: response.data.message , status: "ok"} );      
    } catch (error) {
      console.error('Erro ao criar o Usuário:', error);
      setMensage( { message: "Erro ao criar o Usuário!", status: "error"} );
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastros</title>
        <meta name="description" content="Cadastro de profissionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div id="nav-signup" >
  
      <div className="body_users">
      <MenuUsers />
      { 
          message.status==="" ? "" : 
          message.status==="ok" ? <div className='alert alert-success' role='alert'> { message.message } <Link className='alert-link' to='/signup/users'>Voltar</Link></div> : 
          <div className='alert alert-danger' role='alert'> { message.message } <Link className='alert-link' to='/signup/users'>Voltar</Link></div>
        }
        <div className="container">
            <div className="row border-bottom">
                <h3> Cadastro de Usuário </h3>
            
                <form method="POST">
                <div className="form-group">
                    <label className="form-label" htmlFor="author_name">Nome</label>
                    <input type="text" id="author_name" name="author_name" className="form-control" value={user.author_name} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_email">E-mail</label>
                    <input type="text" id="author_email" name="author_email" className="form-control" value={user.author_email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_user">Usuário</label>
                    <input type="text" id="author_user" name="author_user" className="form-control" value={user.author_user} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_pwd">Senha</label>
                    <input type="password" id="author_pwd" name="author_pwd" className="form-control" value={user.author_pwd} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_level">Nível</label>
                    <select className="form-select" id="author_level" name="author_level" value={user.author_level} onChange={handleChange}>
                      {optionsLevel.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="author_status">Status</label>
                    <select className="form-select" id="author_status" name="author_status" value={user.author_status} onChange={handleChange}>
                      {optionsStatus.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group p-2">
                    <button className="btn btn-outline-success" type="button" onClick={handleCreateUser} >Salvar</button>
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
