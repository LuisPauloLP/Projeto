import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfessionalsAction(props) {
    return (
        <>
            <Link className="btn btn-outline-success btn-sm" to={`/signup/professionals/read/${ props.pid }`}>Visualizar</Link>
            <Link className="btn btn-outline-primary btn-sm" to={`/signup/professionals/update/${ props.pid }`}>Editar</Link>
            <Link className="btn btn-outline-danger btn-sm" to={`/signup/professionals/delete/${ props.pid }`}>Deletar</Link>
        </>
    )
}