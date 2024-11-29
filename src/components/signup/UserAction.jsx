import React from 'react';
import { Link } from 'react-router-dom';

export default function UserAction(props) {
    return (
        <>
            <Link className="btn btn-outline-success btn-sm" to={`/signup/users/read/${ props.pid }`}>Visualizar</Link>
            <Link className="btn btn-outline-primary btn-sm" to={`/signup/users/update/${ props.pid }`}>Editar</Link>
            <Link className="btn btn-outline-danger btn-sm" to={`/signup/users/delete/${ props.pid }`}>Deletar</Link>
        </>
    )
}
