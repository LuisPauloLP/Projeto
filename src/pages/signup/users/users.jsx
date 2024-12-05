import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import UserAction from '@/components/signup/UserAction';
import MenuUsers from '@/components/signup/MenuUsers';
import Header from '@/components/header/header';
import { Helmet } from 'react-helmet';

export default function Users() {
    const API_URL = "http://localhost:5050/api/users";
    const [users, setUsers] = useState([]); 

    // Função para buscar todos os usuários
    const getAllUsers = async () => {
        try {
            const response = await Axios.get(API_URL);
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao buscar os usuários:', error);
        }
    };

    // Função chamada pelo MenuUsers para atualizar a lista de usuários
    const handleSearchResults = (searchResults) => {
        setUsers(searchResults.length > 0 ? searchResults : []);
    };

    useEffect(() => {
        getAllUsers(); // Carrega todos os usuários ao carregar a página
    }, []);

    return (
        <>
            <Helmet>
                <title>Cadastros</title>
                <meta name="description" content="Cadastro de profissionais e alunos" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <div id="nav-signup">
                <Header />
                <div className="body_users">
                    <MenuUsers onSearch={handleSearchResults} /> {/* Passa a função para pesquisa */}
                    <div className="container">
                        <div className="row border-bottom">
                            <h3>Lista de Usuários</h3>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Usuário</th>
                                        <th scope="col">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.author_name}</td>
                                            <td>{user.author_user}</td>
                                            <td>
                                                <UserAction pid={user.id}></UserAction>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// import React from 'react';
// import Axios from 'axios'
// import UserAction from '@/components/signup/UserAction'
// import { Helmet } from 'react-helmet'
// import { useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import { AiOutlineClose } from "react-icons/ai";
// import moment from 'moment';
// import Header from '@/components/header/header'
// import MenuUsers from '@/components/signup/MenuUsers'



// export default function users() {

//   const API_URL = "http://localhost:5050/api/users"
  
//   const [users, setUsers] = useState([]); 
  
//   useEffect(() => {
//     const getAllUsers = async () => {
//       try {
//         const response = await Axios.get(API_URL);
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Erro ao buscar os usuários:', error);
//       }
//     };

//     getAllUsers();

//   }, []);

//   const [pesquisa, setPesquisa] = useState("");
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
//             alert("Nenhum usuário encontrado.");
//         }
//     };

//   return (
//     <>
//       <Helmet>
//         <title>Cadastros</title>
//         <meta name="description" content="Cadastro de profissionais e alunos" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Helmet>
//       <div id="nav-signup">
//         <Header />
//         <div className="body_users">
//           <MenuUsers />
//           <div className="container">
//             <div className="row border-bottom">
//               <h3> Lista de Usuários </h3>
        
//               <table className="table table-hover">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Nome</th>
//                   <th scope="col">Usuário</th>
//                   <th scope="col">Ações</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map( user => (
//                   <tr key={user._id}>
//                     <th scope="row">{user._id}</th>
//                     <td>{user.author_name}</td>
//                     <td>{user.author_user}</td>
//                     <td>
//                       <UserAction pid={ user._id }></UserAction>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//   </>
//   )
// }
