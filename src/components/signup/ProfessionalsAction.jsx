import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfessionalsAction(props) {
    return (
        <>
        <div className="actions">
            <Link className="bottom_read" to={`/signup/professionals/read/${ props.pid }`}>Visualizar</Link>
            <Link className="bottom_update" to={`/signup/professionals/update/${ props.pid }`}>Editar</Link>
            <Link className="bottom_delete" to={`/signup/professionals/delete/${ props.pid }`}>Deletar</Link>
        </div>
        </>
    )
}