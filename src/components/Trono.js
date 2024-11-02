import React, { useState } from 'react';
import Personagem from './Personagem';

export default function Trono (props) {
    const [dono, setDono] = useState(null);

    function mudarDono (nome) {
        alert(nome + " é o novo dono!")
        setDono( nome )
        console.log(dono);
    }
    return (           
        <>
        <ul>
            <Personagem nome="Daenerys" reivindicarTrono={mudarDono}></Personagem>
            <Personagem nome="John Snow" reivindicarTrono={mudarDono}></Personagem>
            <Personagem nome="Tyrion" reivindicarTrono={mudarDono}></Personagem>
            <Personagem nome="Joffrey" reivindicarTrono={mudarDono}></Personagem>
            <Personagem nome="Robb" reivindicarTrono={mudarDono}></Personagem>
        </ul>
        Dono: { dono }
        </>
    );

};