import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { AiFillHome, AiFillCalendar, AiFillBell, AiOutlineUserAdd, AiFillSetting } from 'react-icons/ai';
import "./header.css";
import Perfil from '../../imgs/perfil.png';

function Header(){
    return(
        <header>
            <nav>
                <section className='container-perfil'>
                    {/* VERIFICAR COMO COLOCAR UMA FOTO QUE O CLIENTE POSSA ESCOLHER */}
                    <img className="img_perfil" src={Perfil}></img>
                    {/* PUXAR O NOME DO BANCO DE DADOS DE ACORDO COM O PERFIL QUE ESTA SENDO USADO */}
                    <h2>Nome</h2>
                </section>
                <section className='container-header'>
                    <div className='div-header'>
                        <AiFillHome className='icon-header'/>
                        <Link className='link' to="/home">Home</Link>
                    </div>
                    <div className='div-header'>
                        <AiFillCalendar className='icon-header'/>
                        <Link className='link' to="/appointments">Agendamentos</Link>
                    </div>
                    <div className='div-header'>
                        <AiOutlineUserAdd className='icon-header'/>
                        <Link className='link' to="/signup">Cadastros</Link>
                    </div>
                </section>
                <section className='container-saida'>
                    <Link to="/">
                        <BiLogOut className='icon-saida'/>
                    </Link>
                </section>
            </nav>
        </header>
    )
}

export default Header;