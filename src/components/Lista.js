export default function Lista () {
    var boys = ["butcher", "hughie", "mother's milk", "frenchie" ]
    var lista = boys.map((valor, index)=>{
        return <li key={index}>{valor}</li>;
    })

    return (           
        <ul>
            { lista }
        </ul>
    );

};