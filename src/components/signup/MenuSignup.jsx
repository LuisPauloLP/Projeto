import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuSignup() {
    return (

    <div className="nav-bar d-flex">
        <div><Link className="navbar-brand" to="#"><a>Cadastros</a></Link></div>
        <div><Link className="nav-link" to="/signup/users">Usuários</Link></div>
        <div><Link className="nav-link" to="/signup/professionals">Profissionais</Link></div>
        <div><Link className="nav-link" to="/signup/students">Alunos</Link></div>
      </div>

    )
}