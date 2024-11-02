// "use client"
import React, { useState } from 'react';

export default function FormEncapsulado (props) {
    
    const [usuario, setUsuario] = useState("");

    function handleUsuario (event) {
        setUsuario( event.target.value )
    }
    
    return(
        <form>
            <input type="email" id="usuario" onChange={handleUsuario} 
                value={usuario} ></input>
            <p>{usuario}</p>
        </form>
    );

};