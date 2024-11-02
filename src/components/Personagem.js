export default function Personagem (props) {
   
    function tomarTrono () {
        //var nome = props.nome
        alert (props.nome + " reivindicou o trono!")
        props.reivindicarTrono(props.nome)
        
    }

    return (           
        <li key={ props.nome }>
            { props.nome }  - Ação:    
            <button onClick={ tomarTrono }>Tomar Trono</button>
        </li>
    );

};