import "./appointments.css";
import Header from "../../components/header/header";
import Calendario from "../../components/calendario/calendario";

function Appointments() {
    return (
        <main className="container">
            <Header />
            <section className="container-calendario">
                <article className="container-agendamento">
                    <Calendario />
                </article>
            </section>
        </main>
    )
}

export default Appointments;