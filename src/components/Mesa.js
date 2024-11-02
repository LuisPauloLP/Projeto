import React, { useState } from 'react';

export default function Mesa () {
    const [cartas, setCartas] = useState(["5", "10", "6"]);
  
    const html = cartas.map((carta, index) => {
      return <li key={index}>{carta}</li>;
    });
  
    return (
      <ul>{ html }</ul>
    )
    
  };