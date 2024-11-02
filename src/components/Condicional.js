function Item({ name, isPacked }) {
    if (isPacked) {
      return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
  }
  
  export default function Condicional() {
    return (
      <section>
        <h3>Lista de Tarefas</h3>
        <ul>
          <Item isPacked={true} name="Criar componente PAI" />
          <Item isPacked={true} name="Criar componente Filho" />
          <Item isPacked={false} name="Mostar resultado em console.log" />
          <Item isPacked={true} name="Mostar resultado em tela" />
          
        </ul>
      </section>
    );
  }
  