import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import './calendario.css';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineClose } from "react-icons/ai";

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

function Calendario(){

    const [eventos, setEventos] = useState([
        {
        id: uuidv4(),
        title: 'Leonardo',
        start: new Date(2024, 1, 19, 10, 0),
        end: new Date(2024, 1, 20, 15, 0),
        organizer: 'Dr. Fernando',
        participants: 'Leonardo',
        desc: 'alguma coisa',
        color: 'yellow',
        status: 'confirmado',
        }
    ]);


    //ADICIONAR E MODIFICAR CONSULTAS
    const [formData, setFormData] = useState({
        title: '',
        start: '',
        end: '',
        organizer: '',
        participants: '',
        desc: '',
        color: '',
    });

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const modificarOuCriarEvento = (novoEvento) => {
        setEventos((prevEventos) => {
            const existeEvento = prevEventos.find((evento) => evento.id === novoEvento.id);
    
            if (existeEvento) {
                return prevEventos.map((evento) =>
                    evento.id === novoEvento.id
                    ? {
                        ...evento,
                        ...novoEvento,
                        title: `${evento.title} - ${novoEvento.participants}`,
                    }
                : evento
                );
            } else {
                return [
                    ...prevEventos,
                        {
                            ...novoEvento,
                            id: uuidv4(), 
                            title: `${novoEvento.title} - ${novoEvento.participants}`,
                        },
                ];
            }
        });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            ...(name === "status" && { color: getColorByStatus(value) }),
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const novoEvento = {
            ...formData,
            start: new Date(formData.start),
            end: new Date(formData.end),
            color: getColorByStatus(formData.status),
        };
    
        modificarOuCriarEvento(novoEvento);
    
        setFormData({
            title: '',
            start: '',
            end: '',
            organizer: '',
            participants: '',
            desc: '',
            color: '',
            status: 'agendado',
        });
    };

    //FUNÇÃO QUE FECHA O PÁGINA DO FORMULÁRIO APÓS CLICAR NO ICON "X"
    const handleCloseForm = () => {
        setMostrarFormulario(false);
    };
    
    //DELETA OS AGENDAMENTOS
    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Você tem certeza que deseja excluir este agendamento?");
        if (isConfirmed) {
            setEventos(eventos.filter(evento => eventos.id !== id));
            handleEventClose();
        }
    };

    //ARRUMADO A COR DO SELECT DE ACORDO COM A OPÇÃO ESCOLHIDA
    const getColorByStatus = (status) => {
        switch (status) {
            case "cancelado":
                return "red";
            case "agendado":
                return "yellow";
            case "confirmado":
                return "green";
            default:
                return "gray";
        }
    };

    const eventStyle = (event) => ({
        style:{
            backgroundColor: getColorByStatus(event.status),
            color: "white", // Ajuste para contraste
            borderRadius: "5px",
            padding: "5px",
        },
    })


    //MOVER CONSULTAS COM O MOUSE
    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const moverEventos = (data) => {
        const {start, end} = data;
        const uptadeEvents = eventos.map((event) => {
            if( event.id === data.event.id){
                return{
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                }
            }
            return event;
        })

        setEventos(uptadeEvents)
    };   

    const handleEventClick = (evento) => {
        setEventoSelecionado(evento);
    }

    //FUNÇÃO QUE FECHA O PÁGINA DO EVENTO APÓS CLICAR NO ICON "X"
    const handleEventClose = () => {
        setEventoSelecionado(false);
    }

    //BARRA DE PESQUISA
    const [pesquisa, setPesquisa] = useState("");
    const [defaultDate, setDefaultDate] = useState(moment().toDate());

    const handleSearchChange = (e) => {
        setPesquisa(e.target.value);
    };

    const realizarPesquisa = () => {
        const eventoEncontrado = eventos.find((evento) =>
            evento.participants.toLowerCase().includes(pesquisa.toLowerCase())
        );

        if (eventoEncontrado) {
            setDefaultDate(new Date(eventoEncontrado.start));
            setEventoSelecionado(eventoEncontrado);
        } else {
            alert("Nenhum agendamento encontrado.");
        }
    };

    return(
        <div className='container-tela'> 
        
            <div className='tela'>
                <div className="toolbar">
                    <button className="button-adicionar" onClick={() => setMostrarFormulario(!mostrarFormulario)}>Adicionar Agendamento</button>
                    <div className="barra-pesquisa">
                        <input
                            type="text"
                            placeholder="Pesquisar por nome..."
                            value={pesquisa}
                            onChange={handleSearchChange}
                            className="barra-pesquisa"
                        />
                        <button onClick={realizarPesquisa} className="botao-pesquisa">
                            Pesquisar
                        </button>
                    </div>
                    
                </div>
                
                {/* CRIAÇÃO DO CALENDARIO */}
                <div className='calendario'>
                    <DragAndDropCalendar
                        defaultDate={moment().toDate()}
                        defaultView='month'
                        events={eventos}
                        localizer={localizer}
                        resizable
                        onEventDrop={moverEventos}
                        onEventResize={moverEventos}
                        onSelectEvent={handleEventClick}
                        eventPropGetter={eventStyle}
                        className='calendar'
                    />
                </div>
            
                {/* CONTAINER DO EVENTO QUE SERÁ MOSTRADO QUANDO CLICAR EM CIMA DO AGENDAMENTO */}
                {eventoSelecionado && (
                    <div className='model'>
                        <div className='model-content'>
                            <div className='container-top'>
                                <h2>{eventoSelecionado?.participants}</h2>
                                <AiOutlineClose className="button-fechar" onClick={handleEventClose}/>
                            </div>
                            <p>Início: {eventoSelecionado?.start.toLocaleString()}</p>
                            <p>Final: {eventoSelecionado?.end.toLocaleString()}</p>
                            <p>Profissional: {eventoSelecionado?.organizer}</p>
                            <p>Status: {eventoSelecionado.status}</p>
                            <p>{eventoSelecionado?.desc}</p>
                            <div className='container-bottom'>
                                <button onClick={() => { handleEventClose(); setMostrarFormulario(!mostrarFormulario); }}>Editar</button>
                                <button onClick={() => handleDelete(eventos.id)}>Excluir</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* CONTAINER DO FORMULARIO DE AGENDAMENTO E MODIFICAÇÃO DE EVENTO */}
                <div className={`container-adicionar ${mostrarFormulario ? 'show' : ''}`}>
                    <div className='container-adicionar-content'>
                        <div className='container-agendamento'>
                            <AiOutlineClose className='button-fechar' onClick={handleCloseForm}/>
                        </div>
                        <div className='container-adicionar-agendamento'>
                            <form className='form-adicionar' onSubmit={handleSubmit}> 
                                <input className='input-text' type="text" name="participants" placeholder="Aluno" value={formData.participants} onChange={handleChange} required />
                                    <div className='container-data'>
                                        <input type="datetime-local" className="input-data" name="start" placeholder="Início" value={formData.start} onChange={handleChange} required />
                                        <input type="datetime-local" className="input-data" name="end" placeholder="Fim" value={formData.end} onChange={handleChange} required />
                                    </div>
                                <input className='input-text' type="text" name="profissional" placeholder="Profissional" value={formData.organizer} onChange={handleChange} required />
                                <div className='select-status'>
                                    <label>Status:</label>
                                    <select name="status" value={formData.status} onChange={handleChange} required>
                                        <option className='status-cancelado' value="cancelado">Cancelado</option>
                                        <option className='status-agendado' value="agendado">Agendado</option>
                                        <option className='status-confirmado' value="confirmado">Confirmado</option>
                                    </select>
                                </div>
                                
                                <input className='input-text' type="text" name="desc" placeholder="Descrição" value={formData.desc} onChange={handleChange} />
                            </form>

                            <button className='button-submit' type="submit">Salvar Agendamento</button>
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Calendario;