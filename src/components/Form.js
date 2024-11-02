export default function Form (props) {

    return(
        <form>
            <input type="email" id="usuario" value={props.texto}></input>
        </form>
    );

};