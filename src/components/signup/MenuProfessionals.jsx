import { Link } from 'react-router-dom';

export default function MenuProfessionals() {
    return (

    <div id="menuSignup">
        <div id="ul"><Link id="ul" to="/signup">Cadastros</Link></div>
        <div id="ul"><Link id="ul" to="/signup/professionals">Profissionais</Link></div>
        <div id="ul"><Link id="ul" to="/signup/professionals/create">Novo Profissional</Link></div>
    </div>

    )
}