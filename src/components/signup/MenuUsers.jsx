import { Link } from 'react-router-dom';

export default function MenuUsers() {
    return (

    <div id="menuSignup">
        <div id="ul"><Link id="ul" to="/signup">Cadastros</Link></div>
        <div id="ul"><Link id="ul" to="/signup/users">Usuários</Link></div>
        <div id="ul"><Link id="ul" to="/signup/users/create">Novo Usuário</Link></div>
    </div>

    )
}