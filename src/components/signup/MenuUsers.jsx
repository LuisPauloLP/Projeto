import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuUsers() {
    return (

    <div className="d-flex justify-content-start">
        <div><Link className="navbar-brand" to="/signup">Cadastros</Link></div>
        <div><Link className="nav-link" to="/signup/users">Usuários</Link></div>
        <div><Link className="nav-link" to="/signup/users/create">Novo Usuário</Link></div>
    </div>

    )
}