// "use client"
import React, { useState } from 'react';

export default function FormME (props) {
    
    const [inputs, setInputs] = useState({ usuario:"", email:"", senha:"" });

    function handleInput (event) {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value })
    }
    
    return(
        <>
            <form>
                <input type="text" id="usuario" onChange={handleInput}></input>
                <input type="email" id="email" onChange={handleInput}></input>
                <input type="text" id="senha" onChange={handleInput}></input>
            </form>

                <p>{inputs.usuario}</p>
                <p>{inputs.email}</p>
                <p>{inputs.senha}</p>

        </>
    );

};