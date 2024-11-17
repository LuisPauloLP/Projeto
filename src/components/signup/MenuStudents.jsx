import { Link } from 'react-router-dom';

export default function MenuStudents() {
    return (

    <div id="menuSignup">
        <div id="ul"><Link id="ul" to="/signup">Cadastros</Link></div>
        <div id="ul"><Link id="ul" to="/signup/students">Estudantes</Link></div>
        <div id="ul"><Link id="ul" to="/signup/students/create">Novo Estudante</Link></div>
    </div>

    )
}