import React, { useEffect, useState } from 'react';
import "./signup.css";
import Axios from 'axios';
import { Helmet } from 'react-helmet';
import Header from '@/components/header/header'
import MenuSignup from '@/components/signup/MenuSignup'

export default function signup() {

  //USERS
  const API_URL = "http://localhost:5050/api/users";
    const [users, setUsers] = useState([]); 

   // Função para buscar todos os usuários
   const getAllUsers = async () => {
    try {
        const response = await Axios.get(API_URL);
        setUsers(response.data);
    } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
    }
};

// Função chamada pelo MenuUsers para atualizar a lista de usuários
const handleSearchResults = (searchResults) => {
    setUsers(searchResults.length > 0 ? searchResults : []);
};

useEffect(() => {
    getAllUsers(); // Carrega todos os usuários ao carregar a página
}, []);

//PROFISSIONAIS
const API_URL_PROFESSIONALS = "http://localhost:5050/api/professionals"
  
  const [professionals, setProfessionals] = useState([]); 
  
  // Função para buscar todos os profissionais
  const getAllProfessionals = async () => {
    try {
        const response = await Axios.get(API_URL_PROFESSIONALS);
        setProfessionals(response.data);
    } catch (error) {
        console.error('Erro ao buscar os profissionais:', error);
    }
};

// // Função chamada pelo MenuProfessionals para atualizar a lista de profissionais
// const handleSearchResults = (searchResults) => {
//     setProfessionals(searchResults.length > 0 ? searchResults : []);
// };

useEffect(() => {
    getAllProfessionals(); // Carrega todos os usuários ao carregar a página
}, []);


//STUDENTS
const API_URL_students = "http://localhost:5050/api/students"
  
  const [students, setStudents] = useState([]); 
  
  // Função para buscar todos os estudantes
  const getAllStudents = async () => {
    try {
        const response = await Axios.get(API_URL_students);
        setStudents(response.data);
    } catch (error) {
        console.error('Erro ao buscar os estudantes:', error);
    }
};

// // Função chamada pelo MenuStudents para atualizar a lista de estudantes
// const handleSearchResults_std = (searchResults) => {
//     setStudents(searchResults.length > 0 ? searchResults : []);
// };

useEffect(() => {
    getAllStudents(); // Carrega todos os estudantes ao carregar a página
}, []);
  return (
    <>
      <Helmet>
        <title>Cadastros</title>
        <meta name="description" content="Cadastro de professionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div id="nav-signup">
        <Header />
        <div className="body_users">
          <MenuSignup onSearch={handleSearchResults} />
          <div className='flex_signup'>
          <div className="container_signup">
                        <div className="row border-bottom">
                            <h3>Lista de Usuários</h3>
                            <table className="table_signup table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Usuário</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>     
                                            <td>{user.author_name}</td>
                                            <td>{user.author_user}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                      <div className="container_signup">
                       <div className="row border-bottom">
                           <h3> Lista de Profissionais </h3>
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Sobrenome</th>
                                <th scope="col">Cargo</th>
                              </tr>
                            </thead>
                            <tbody>
                              {professionals.map( professional => (
                                <tr key={professional._id}>
                                <td>{professional.professional_name}</td>
                                <td>{professional.professional_surname}</td>
                                <td>{professional.professional_cargo}</td>
                                </tr>
                              ))}
                            </tbody>
                         </table>
                        </div>
                      </div>
                    <div className="container_signup">
                      <div className="row border-bottom">
                        <h3> Lista de Estudantes </h3>
                        <table className="table_signup table-hover">
                          <thead>
                            <tr>
                              <th scope="col">Nome</th>
                              <th scope="col">Sobrenome</th>
                            </tr>
                          </thead>
                          <tbody>
                            {students.map( student => (
                            <tr key={student._id}>
                               <td>{student.student_name}</td>
                               <td>{student.student_surname}</td>
                            </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
          </div>
                  
        </div>
      </div>
  </>
  )
}

