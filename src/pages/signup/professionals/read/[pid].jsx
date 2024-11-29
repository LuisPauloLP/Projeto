import React from 'react';
import MenuProfessionals from '@/components/signup/MenuProfessionals';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function readprofessional() {
  
  const API_URL = "http://localhost:5050/api/professionals/"

  const [professional, setProfessional] = useState({
    professional_id: "",
    professional_name: "",
    professional_surname: "",
    professional_cpf: "",
    professional_email: "",
    professional_date_of_born: "",
    professional_phone: "",
    professional_cep: "",
    professional_logradouro: "",
    professional_bairro: "",
    professional_city: "",
    professional_UF: "",
    professional_cargo: "",
    professional_entryTime: "",
    professional_exitTime: "",
    professional_user: "",
    professional_status: "",
    professional_create_date: ""
  });

  const navigate = useNavigate();
  const { pid } = useParams();

  const [message, setMensage] = useState({ message:"", status:""});

  const optionsStatus = [
    {value: '', text: '-- Selecione um estado --'},
    {value: 'true', text: 'Ativo'},
    {value: 'false', text: 'Inativo'},
  ];


     useEffect(() => {
        const getProfessional = async () => {
          try {
            const response = await Axios.get(API_URL + pid);
            setMensage( { message: response.data.message , status: "ok"} ); 
            setProfessional( response.data.foundedProfessional );
          } catch (error) {
            console.error('Erro ao buscar os profissionais:', error);
            setMensage( { message: "Erro ao buscar os Profissionais!", status: "error"} );
          }
        };
    
        getProfessional();
    
      }, []);



  return (
    <>
      <Helmet>
        <title>APP-BC</title>
        <meta name="description" content="Cadastro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div>
        <MenuProfessionals />
        { 
          message.status==="" ? "" : 
          message.status==="ok" ? "" : 
          <div className='alert alert-danger' role='alert'> { message.message } <Link className='alert-link' to='/signup/professionals'>Voltar</Link></div>
        }
      </div>
  
      <div>
        <div className="container">
            <div className="row border-bottom">
                <h3> Detalhes do Profissional </h3>
            
                <form >
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_name">Nome</label>
                    <input type="text" id="professional_name" name="professional_name" className="form-control" value={professional.professional_name} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_surname">Sobrenome</label>
                    <input type="text" id="professional_surname" name="professional_surname" className="form-control" value={professional.professional_surname} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_cpf">CPF</label>
                    <input type="number" id="professional_cpf" name="professional_cpf" className="form-control" value={professional.professional_cpf} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_email">E-mail</label>
                    <input type="text" id="professional_email" name="professional_email" className="form-control" value={professional.professional_email} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_date_of_born">Data de Nascimento</label>
                    <input type="date" id="professional_date_of_born" name="professional_date_of_born" className="form-control" value={professional.professional_date_of_born} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_phone">Telefone</label>
                    <input type="number" id="professional_phone" name="professional_phone" className="form-control" value={professional.professional_phone} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_cep">CEP</label>
                    <input type="number" id="professional_cep" name="professional_cep" className="form-control" value={professional.professional_cep} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_logradouro">Logradouro</label>
                    <input type="text" id="professional_logradouro" name="professional_logradouro" className="form-control" value={professional.professional_logradouro} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_bairro">Bairro</label>
                    <input type="text" id="professional_bairro" name="professional_bairro" className="form-control" value={professional.professional_bairro} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_city">Cidade</label>
                    <input type="text" id="professional_city" name="professional_city" className="form-control" value={professional.professional_city} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_UF">Unidade Federativa (Estado)</label>
                    <input type="text" id="professional_UF" name="professional_UF" className="form-control" value={professional.professional_UF} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_cargo">Cargo</label>
                    <input type="text" id="professional_cargo" name="professional_cargo" className="form-control" value={professional.professional_cargo} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_entryTime">Hora de Entrada</label>
                    <input type="time" id="professional_entryTime" name="professional_entryTime" className="form-control" value={professional.professional_entryTime} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_exitTime">Hora de Saída</label>
                    <input type="time" id="professional_exitTime" name="professional_exitTime" className="form-control" value={professional.professional_exitTime} readOnly />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_user">Usuário</label>
                    <input type="text" id="professional_user" name="professional_user" className="form-control" value={professional.professional_user} readOnly/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_status">Status</label>
                    <select className="form-select" id="professional_status" name="professional_status" value={professional.professional_status} readOnly>
                      {optionsStatus.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_create_date">Data de Criação</label>
                    <input type="text" id="professional_create_date" name="professional_create_date" className="form-control" value={ professional.professional_create_date } readOnly/>
                </div>
                <div className="form-group p-2">
                    {/* <button className="btn btn-outline-success" type="button" onClick={handleCreateUser} >Salvar</button> */}
                    <Link className="btn btn-outline-info" to="/signup/professionals">Voltar</Link>
                </div>
                </form>
            </div>
        </div>
      </div>  
  </>
  )
}


