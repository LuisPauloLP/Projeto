import { Link } from 'react-router-dom';

export default function MenuSignup() {
    return (

    <div id="menuSignup">
        <div id="ul"><Link id="ul" to="#"><a>Cadastros</a></Link></div>
        <div id="ul"><Link id="ul" to="/signup/users">Usuários</Link></div>
        <div id="ul"><Link id="ul" to="/signup/professionals">Profissionais</Link></div>
        <div id="ul"><Link id="ul" to="/signup/students">Alunos</Link></div>
      </div>

    )
}