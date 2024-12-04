import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Axios from 'axios'; // Importar Axios se ainda não estiver no arquivo

export default function MenuStudents({ onSearch }) {
    const [pesquisa, setPesquisa] = useState("");

    const handleSearchChange = (e) => {
        setPesquisa(e.target.value);
    };

    const realizarPesquisa = async () => {
        try {
            const response = await Axios.get(`http://localhost:5050/api/students/search`, {
                params: { name: pesquisa }
            });
            onSearch(response.data); // Chama a função passada como prop para atualizar a lista
        } catch (error) {
            console.error('Erro ao realizar pesquisa:', error);
            alert('Erro ao buscar estudante.');
        }
    }; 
    return (
//Sombra com div
       <div className="d-flex justify-content-start">
        <div className="nav_flex">
           <div className="p-2"><Link className="navbar-brand" to="/signup">Cadastros</Link></div>
           <div><Link className="nav-link" to="/signup/students">Estudantes</Link></div>
           <div><Link className="nav-link" to="/signup/students/create">Novo Estudante</Link></div>
        </div>
        <div className="pesquisa">
                <input
                    type="text"
                    placeholder="Pesquisar por nome..."
                    value={pesquisa}
                    onChange={handleSearchChange}
                    className="barra-pesquisa"
                />
                <button onClick={realizarPesquisa} className="botao-pesquisa">Pesquisar</button>
            </div>
    </div> 

    )
}