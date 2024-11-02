import React, { useState } from 'react';

export default function Jogador () {
    const [cartas, setCartas] = useState(["A", "10"]);
  
    const html = cartas.map((carta, index) => {
      return <li key={index}>{carta}</li>;
    });
  
    return (
      <ul>{ html }</ul>
    )
    
  };

