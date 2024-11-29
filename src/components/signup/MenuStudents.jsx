import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuStudents() {
    return (
//Sombra com div
    <div className="nav-bar d-flex">
       <div className="d-flex justify-content-start">
        <div className="p-2"><Link className="navbar-brand" to="/signup">Cadastros</Link></div>
        <div><Link className="nav-link" to="/signup/students">Estudantes</Link></div>
        <div><Link className="nav-link" to="/signup/students/create">Novo Estudante</Link></div>
    </div> 
    </div>

    )
}