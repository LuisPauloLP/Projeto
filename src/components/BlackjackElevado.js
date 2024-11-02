import React, { useState } from 'react';
import MesaElevado from './MesaElevado';
import JogadorElevado from './JogadorElevado';

export default function BlackjackElevado () {
    const [jogadorCartas, setJCartas] = useState(["A", "9"]);
    const [mesaCartas, setMCartas] = useState(["5", "10", "8"]);

    return (           
    <section>
        <div>
            <span>Mesa</span>
            <MesaElevado cartas={mesaCartas} />
        </div>
        <div>
            <span>Jogador</span>
            <JogadorElevado cartas={jogadorCartas} />
        </div>            
    </section>);

};