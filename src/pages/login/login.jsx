import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";
import React from 'react';
import Logo from "../../imgs/logo_certa.png";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setLembre] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //fetch dos dados
    //adicionado de exemplo, mudar e fazer ajustes como necessário
    //precisa adicionar o URL do banco
    try {
      const response = await fetch("URL_DO_SEU_BACKEND", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        navigate("/home"); 
      } else {
        alert("Falha na autenticação. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro na autenticação:", error);
      alert("Erro de rede. Tente novamente mais tarde.");
    }

    navigate("/home")
  }

  return (
    <div className='container_login'>
      <div className='container-login'>

        <img src={Logo}></img>

        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div className='input-field'>
            <FaUser className='icon' />
            <input 
              type="username" 
              placeholder='Usuário'
              required 
              onChange={(e) => setUsername(e.target.value)} 
              value={username}/>
          </div>
          <div className='input-field'>
            <FaLock className='icon' />
            <input 
              type="password" 
              placeholder='Senha'
              required 
              onChange={(e) => setPassword(e.target.value)}
              value={password}/>
          </div>

           <div className='recall-forget'>
            <label>
              <input type="checkbox" 
              onChange={(e) => setLembre(e.target.value)} />
                Lembre de mim
            </label>
            <a href='#'>Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
