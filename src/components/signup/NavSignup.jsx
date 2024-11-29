import React from 'react';
import { Link } from 'react-router-dom';

export default function NavSignup() {
    return (

        <nav className="navbar navbar-light bg-warning justify-content-between p-2">
           
            <Link className="navbar-brand" to="#"><h2>Base de Conhecimentos</h2></Link>
            <div className="form-group">
                    <Link className="btn btn-danger" to="/">Logout</Link>
            </div>   

        </nav>
    )
}
