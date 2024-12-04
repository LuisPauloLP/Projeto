import React from 'react';
import MenuStudents from '@/components/signup/MenuStudents';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export default function createstudent() {
  
  const API_URL = "http://localhost:5050/api/students"

  const [student, setStudent] = useState({
    //student_id: "",
    student_name: "",
    student_surname: "",
    student_cpf: "",
    student_email: "",
    student_date_of_born: "",
    student_phone: "",
    student_cep: "",
    student_logradouro: "",
    student_bairro: "",
    student_city: "",
    student_UF: "",
    student_user: "",
    student_status: "",
    //student_create_date: ""
  });

  const [message, setMensage] = useState({ message:"", status:""});

  const optionsStatus = [
    {value: '', text: '-- Selecione um estado --'},
    {value: 'true', text: 'Ativo'},
    {value: 'false', text: 'Inativo'},
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleCreateStudent = async () => {
    try {
      const response = await Axios.post(API_URL, { student });
      setMensage( { message: response.data.message , status: "ok"} );      
    } catch (error) {
      console.error('Erro ao criar o Estudante:', error);
      setMensage( { message: "Erro ao criar o Estudante!", status: "error"} );
    }
  };

  return (
    <>
      <Helmet>
        <title>Cadastros</title>
        <meta name="description" content="Cadastro de profissionais e alunos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div id="nav-signup">
  
      <div className="body_users">
      <MenuStudents />
        { 
          message.status==="" ? "" : 
          message.status==="ok" ? <div className='alert alert-success' role='alert'> { message.message } <Link className='alert-link' to='/signup/students'>Voltar</Link></div> : 
          <div className='alert alert-danger' role='alert'> { message.message } <Link className='alert-link' to='/signup/students'>Voltar</Link></div>
        }
        <div className="container">
            <div className="row border-bottom">
                <h3> Cadastro de Estudante </h3>
            
                <form method="POST">
                <div className="form-group">
                    <label className="form-label" htmlFor="student_name">Nome</label>
                    <input type="text" id="student_name" name="student_name" className="form-control" value={student.student_name} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_surname">Sobrenome</label>
                    <input type="text" id="student_surname" name="student_surname" className="form-control" value={student.student_surname} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_cpf">CPF</label>
                    <input type="number" id="student_cpf" name="student_cpf" className="form-control" value={student.student_cpf} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_email">E-mail</label>
                    <input type="text" id="student_email" name="student_email" className="form-control" value={student.student_email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_date_of_born">Data de Nascimento</label>
                    <input type="date" id="student_date_of_born" name="student_date_of_born" className="form-control" value={student.student_date_of_born} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_phone">Telefone</label>
                    <input type="number" id="student_phone" name="student_phone" className="form-control" value={student.student_phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_cep">CEP</label>
                    <input type="number" id="student_cep" name="student_cep" className="form-control" value={student.student_cep} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_logradouro">Logradouro</label>
                    <input type="text" id="student_logradouro" name="student_logradouro" className="form-control" value={student.student_logradouro} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_bairro">Bairro</label>
                    <input type="text" id="student_bairro" name="student_bairro" className="form-control" value={student.student_bairro} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_city">Cidade</label>
                    <input type="text" id="student_city" name="student_city" className="form-control" value={student.student_city} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_UF">Unidade Federativa(Estado)</label>
                    <input type="text" id="student_UF" name="student_UF" className="form-control" value={student.student_UF} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_user">Usuário</label>
                    <input type="text" id="student_user" name="student_user" className="form-control" value={student.student_user} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="student_status">Status</label>
                    <select className="form-select" id="student_status" name="student_status" value={student.student_status} onChange={handleChange}>
                      {optionsStatus.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                </div>
                <div className="form-group p-2">
                    <button className="btn btn-outline-success" type="button" onClick={handleCreateStudent} >Salvar</button>
                    <Link className="btn btn-outline-info" to="/signup/students">Voltar</Link>
                </div>
                </form>
            </div>
        </div>
      </div>  
      </div>
  </>
  )
}

