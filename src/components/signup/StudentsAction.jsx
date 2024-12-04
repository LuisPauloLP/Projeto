import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentsAction(props) {
    return (
        <>
        <div className="actions">
            <Link className="bottom_read" to={`/signup/students/read/${ props.pid }`}>Visualizar</Link>
            <Link className="bottom_update" to={`/signup/students/update/${ props.pid }`}>Editar</Link>
            <Link className="bottom_delete" to={`/signup/students/delete/${ props.pid }`}>Deletar</Link>
        </div>
        </>
    )
}