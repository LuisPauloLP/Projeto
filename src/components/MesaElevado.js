import React, { useState } from 'react';

export default function MesaElevado (props) {
      
    const html = props.cartas.map((carta, index) => {
      return <li key={index}>{carta}</li>;
    });
  
    return (
      <ul>{ html }</ul>
    )
    
  };
