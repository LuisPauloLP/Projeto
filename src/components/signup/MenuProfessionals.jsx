import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuProfessionals() {
    return (

    <div className="d-flex justify-content-start">
        <div className="p-2"><Link className="navbar-brand" to="/signup">Cadastros</Link></div>
        <div><Link className="nav-link" to="/signup/professionals">Profissionais</Link></div>
        <div><Link className="nav-link" to="/signup/professionals/create">Novo Profissional</Link></div>
    </div>

    )
}