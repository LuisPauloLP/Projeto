import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Axios from 'axios'; // Importar Axios se ainda não estiver no arquivo

export default function MenuUsers({ onSearch }) {
    const [pesquisa, setPesquisa] = useState("");

    const handleSearchChange = (e) => {
        setPesquisa(e.target.value);
    };

    const realizarPesquisa = async () => {
        try {
            const response = await Axios.get(`http://localhost:5050/api/users/search`, {
                params: { name: pesquisa }
            });
            onSearch(response.data); // Chama a função passada como prop para atualizar a lista
        } catch (error) {
            console.error('Erro ao realizar pesquisa:', error);
            alert('Erro ao buscar usuário.');
        }
    };

    return (
        <div className="d-flex justify-content-start">
        <div className="nav_flex">
            <div><Link className="navbar-brand" to="/signup">Cadastros</Link></div>
            <div><Link className="nav-link" to="/signup/users">Usuários</Link></div>
            <div><Link className="nav-link" to="/signup/users/create">Novo Usuário</Link></div>
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
    );
}


// export default function MenuUsers() {
//     //BARRA DE PESQUISA
//     const [pesquisa, setPesquisa] = useState("");
//     const [defaultDate, setDefaultDate] = useState(moment().toDate());

//     const handleSearchChange = (e) => {
//         setPesquisa(e.target.value);
//     };

//     const realizarPesquisa = () => {
//         const usuarioEncontrado = eventos.find((evento) =>
//             evento.participants.toLowerCase().includes(pesquisa.toLowerCase())
//         );

//         if (usuarioEncontrado) {
//             setDefaultDate(new Date(usuarioEncontrado.start));
//             setUsuarioSelecionado(usuarioEncontrado);
//         } else {
//             alert("Nenhum usuario encontrado.");
//         }
//     };
//     return (

//     <div className="d-flex justify-content-start">
//         <div><Link className="navbar-brand" to="/signup">Cadastros</Link></div>
//         <div><Link className="nav-link" to="/signup/users">Usuários</Link></div>
//         <div><Link className="nav-link" to="/signup/users/create">Novo Usuário</Link></div>
//         <div><input type="text" placeholder="Pesquisar por nome..." value={pesquisa} onChange={handleSearchChange} className="barra-pesquisa"/>
//              <button onClick={realizarPesquisa} className="botao-pesquisa">Pesquisar</button>
//         </div>
//     </div>

//     )
// }