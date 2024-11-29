import React from 'react';
import Axios from 'axios'
import UserAction from '@/components/signup/UserAction'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import MenuUsers from '@/components/signup/MenuUsers'


export default function users() {

  const API_URL = "http://localhost:5050/api/users"
  
  const [users, setUsers] = useState([]); 
  
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await Axios.get(API_URL);
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
      }
    };

    getAllUsers();

  }, []);

  return (
    <>
      <Helmet>
        <title>APP-BC</title>
        <meta name="description" content="Cadastro de profissionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div>
        <MenuUsers />
      </div>

  
      <div>
        <div className="container">
        <div className="row border-bottom">
        <h3> Lista de Usuários </h3>
        
        <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Usuário</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>

        {users.map( user => (
            <tr key={user._id}>
              <th scope="row">{user._id}</th>
              <td>{user.author_name}</td>
              <td>{user.author_user}</td>
              <td>
                <UserAction pid={ user._id }></UserAction>
              </td>
            </tr>
        ))}

        </tbody>
        </table>
        </div>
        </div>
      </div>  
  </>
  )
}


