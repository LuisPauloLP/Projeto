export default function KeyLista () {
    var items = [
        {"_id": "ac9a8b098c090c90", "name": "Goku"},
        {"_id": "ac9a8b098c090c91", "name": "Picollo"},
        {"_id": "ac9a8b098c090c92", "name": "Frezza"},
        {"_id": "ac9a8b098c090c93", "name": "Gohan"},
        {"_id": "ac9a8b098c090c94", "name": "Mr. Satan"}
    ]

    var lista = items.map((valor)=>{
        return <li key={valor._id}> {valor.name} - {valor._id} </li>
    })

    return (           
        <ul>
            { lista }
        </ul>
    );

};