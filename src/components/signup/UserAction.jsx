
import React from 'react';
import { Link } from 'react-router-dom';

export default function UserAction(props) {
    return (
        <>
        <div className="actions">
            <Link className="bottom_read" to={`/signup/users/read/${ props.pid }`}>Visualizar</Link>
            <Link className="bottom_update" to={`/signup/users/update/${ props.pid }`}>Editar</Link>
            <Link className="bottom_delete" to={`/signup/users/delete/${ props.pid }`}>Deletar</Link>
        </div>
        </>
    )
}
