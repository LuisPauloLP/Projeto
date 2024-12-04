import React from 'react';
import Axios from 'axios'
import StudentsAction from '@/components/signup/StudentsAction'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '@/components/header/header'
import MenuStudents from '@/components/signup/MenuStudents'


export default function students() {

  const API_URL = "http://localhost:5050/api/students"
  
  const [students, setStudents] = useState([]); 
  
  // Função para buscar todos os estudantes
  const getAllStudents = async () => {
    try {
        const response = await Axios.get(API_URL);
        setStudents(response.data);
    } catch (error) {
        console.error('Erro ao buscar os estudantes:', error);
    }
};

// Função chamada pelo MenuStudents para atualizar a lista de estudantes
const handleSearchResults = (searchResults) => {
    setStudents(searchResults.length > 0 ? searchResults : []);
};

useEffect(() => {
    getAllStudents(); // Carrega todos os estudantes ao carregar a página
}, []);

  return (
    <>
      <Helmet>
        <title>Cadastros</title>
        <meta name="description" content="Cadastro de profissionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div id="nav-signup">
        <Header />
        <div className="body_users">
          <MenuStudents onSearch={handleSearchResults}/>
          <div className="container">
            <div className="row border-bottom">
              <h3> Lista de Estudantes </h3>
        
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Sobrenome</th>
                    <th scope="col">Ações</th>
                 </tr>
                </thead>
                <tbody>

                  {students.map( student => (
                    <tr key={student._id}>
                    <th scope="row">{student._id}</th>
                    <td>{student.student_name}</td>
                    <td>{student.student_surname}</td>
                    <td>
                        <StudentsAction pid={ student._id }></StudentsAction>
                    </td>
                   </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>  
      </div>
  </>
  )
}

