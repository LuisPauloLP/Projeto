import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";
import React from 'react';
import Logo from "../../imgs/logo_certa.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(""); // Corrigido para username
  const [password, setPassword] = useState(""); // Corrigido para password
  const [rememberMe, setRememberMe] = useState(false); // Corrigido para booleano
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert('Por favor, preencha ambos os campos.');
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ author_user: username, author_pwd: password }), // Dados enviados para o backend
      });

      const data = await response.json();

      if (response.ok) {
        // Login bem sucedido, redirecionado para a página "/home"
        navigate("/home");
      } else {
        // Exibe um erro se a autenticação falha
        alert(data.message || "Falha na autenticação. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro na autenticação:", error);
      alert("Erro de rede. Tente novamente mais tarde.");
    }
  };

  return (
    <div className='container_login'>
      <div className='container-login'>

        <img src={Logo}></img>

        <form classname="form" onSubmit={handleSubmit}>
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
  );
};

export default Login;
