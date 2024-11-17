import MenuProfessionals from '@/components/signup/MenuProfessionals';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export default function createprofessional() {
  
  const API_URL = "http://localhost:5050/api/professionals"

  const [professional, setProfessional] = useState({
    //professional_id: "",
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
    //professional_create_date: ""
  });

  const [message, setMensage] = useState({ message:"", status:""});

  const optionsStatus = [
    {value: '', text: '-- Selecione um estado --'},
    {value: 'true', text: 'Ativo'},
    {value: 'false', text: 'Inativo'},
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfessional({
      ...professional,
      [name]: value
    });
  };

  const handleCreateProfessional = async () => {
    try {
      const response = await Axios.post(API_URL, { professional });
      setMensage( { message: response.data.message , status: "ok"} );      
    } catch (error) {
      console.error('Erro ao criar o Profissional:', error);
      setMensage( { message: "Erro ao criar o Profissional!", status: "error"} );
    }
  };

  return (
    <>
      <Helmet>
        <title>APP-BC</title>
        <meta name="description" content="Cadastro de profissionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div>
        <MenuProfessionals />
        { 
          message.status==="" ? "" : 
          message.status==="ok" ? <div className='alert alert-success' role='alert'> { message.message } <Link className='alert-link' to='/signup/professionals'>Voltar</Link></div> : 
          <div className='alert alert-danger' role='alert'> { message.message } <Link className='alert-link' to='/signup/professionals'>Voltar</Link></div>
        }
      </div>
  
      <div id="tabela">
        <div>
            <div className="row border-bottom">
                <h3> Cadastro de Profissional </h3>
            
                <form method="POST">
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_name">Nome</label>
                    <input type="text" id="professional_name" name="professional_name" className="form-control" value={professional.professional_name} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_surname">Sobrenome</label>
                    <input type="text" id="professional_surname" name="professional_surname" className="form-control" value={professional.professional_surname} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_cpf">CPF</label>
                    <input type="number" id="professional_cpf" name="professional_cpf" className="form-control" value={professional.professional_cpf} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_email">E-mail</label>
                    <input type="text" id="professional_email" name="professional_email" className="form-control" value={professional.professional_email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_date_of_born">Data de Nascimento</label>
                    <input type="date" id="professional_date_of_born" name="professional_date_of_born" className="form-control" value={professional.professional_date_of_born} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_phone">Telefone</label>
                    <input type="number" id="professional_phone" name="professional_phone" className="form-control" value={professional.professional_phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_cep">CEP</label>
                    <input type="number" id="professional_cep" name="professional_cep" className="form-control" value={professional.professional_cep} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_logradouro">Logradouro</label>
                    <input type="text" id="professional_logradouro" name="professional_logradouro" className="form-control" value={professional.professional_logradouro} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_bairro">Bairro</label>
                    <input type="text" id="professional_bairro" name="professional_bairro" className="form-control" value={professional.professional_bairro} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_city">Cidade</label>
                    <input type="text" id="professional_city" name="professional_city" className="form-control" value={professional.professional_city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_UF">Unidade Federativa (Estado)</label>
                    <input type="text" id="professional_UF" name="professional_UF" className="form-control" value={professional.professional_UF} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_cargo">Cargo</label>
                    <input type="text" id="professional_cargo" name="professional_cargo" className="form-control" value={professional.professional_cargo} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_entryTime">Hora de Entrada</label>
                    <input type="time" id="professional_entryTime" name="professional_entryTime" className="form-control" value={professional.professional_entryTime} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_exitTime">Hora de Saída</label>
                    <input type="time" id="professional_exitTime" name="professional_exitTime" className="form-control" value={professional.professional_exitTime} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_user">Usuário</label>
                    <input type="text" id="professional_user" name="professional_user" className="form-control" value={professional.professional_user} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="professional_status">Status</label>
                    <select className="form-select" id="professional_status" name="professional_status" value={professional.professional_status} onChange={handleChange}>
                      {optionsStatus.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group p-2">
                    <button className="btn btn-outline-success" type="button" onClick={handleCreateProfessional} >Salvar</button>
                    <Link className="btn btn-outline-info" to="/signup/professionals">Voltar</Link>
                </div>
                </form>
            </div>
        </div>
      </div>  
  </>
  )
}


