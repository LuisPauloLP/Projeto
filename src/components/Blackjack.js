import React, { useState } from 'react';
import Mesa from './Mesa';
import Jogador from './Jogador';
export default function Blackjack () {
    
    return (           
    <section>
        <div>
            <span>Mesa</span>
            <Mesa />
        </div>
        <div>
            <span>Jogador</span>
            <Jogador />
        </div>            
    </section>);

};