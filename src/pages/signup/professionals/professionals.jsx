import React from 'react';
import Axios from 'axios'
import ProfessionalsAction from '@/components/signup/ProfessionalsAction'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '@/components/header/header'
import MenuProfessionals from '@/components/signup/MenuProfessionals'


export default function professionals() {

  const API_URL = "http://localhost:5050/api/professionals"
  
  const [professionals, setProfessionals] = useState([]); 
  
  // Função para buscar todos os profissionais
  const getAllProfessionals = async () => {
    try {
        const response = await Axios.get(API_URL);
        setProfessionals(response.data);
    } catch (error) {
        console.error('Erro ao buscar os profissionais:', error);
    }
};

// Função chamada pelo MenuProfessionals para atualizar a lista de profissionais
const handleSearchResults = (searchResults) => {
    setProfessionals(searchResults.length > 0 ? searchResults : []);
};

useEffect(() => {
    getAllProfessionals(); // Carrega todos os usuários ao carregar a página
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
        <MenuProfessionals onSearch={handleSearchResults}/>
        <div className="container">
        <div className="row border-bottom">
        <h3> Lista de Profissionais </h3>
        
        <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Cargo</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>

        {professionals.map( professional => (
            <tr key={professional._id}>
              <th scope="row">{professional._id}</th>
              <td>{professional.professional_name}</td>
              <td>{professional.professional_surname}</td>
              <td>{professional.professional_cargo}</td>
              <td>
                <ProfessionalsAction pid={ professional._id }></ProfessionalsAction>
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

