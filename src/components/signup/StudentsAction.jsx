import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentsAction(props) {
    return (
        <>
            <Link className="btn btn-outline-success btn-sm" to={`/signup/students/read/${ props.pid }`}>Visualizar</Link>
            <Link className="btn btn-outline-primary btn-sm" to={`/signup/students/update/${ props.pid }`}>Editar</Link>
            <Link className="btn btn-outline-danger btn-sm" to={`/signup/students/delete/${ props.pid }`}>Deletar</Link>
        </>
    )
}
