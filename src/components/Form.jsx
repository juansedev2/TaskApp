import { useState} from "react";

// ! Este componente contien el formulario de las tareas
function Form({crearTarea}) {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    function capturarDatos(evento) {
        
        evento.preventDefault();  // ! Detener el evento de submit
        
        const nueva_tarea = {
            titulo,
            descripcion
        }

        crearTarea(nueva_tarea);
        document.getElementById("titulo").value = "";
        document.getElementById("descripcion").value = "";
        setTitulo("");
        setDescripcion("");
    }

    return(
        <form onSubmit={capturarDatos} id="formulario">
            <div>
                <label htmlFor="titulo">Título de la tarea </label>
                <input type="text" id="titulo" autoFocus onChange={(evento => setTitulo(evento.target.value))}/>
            </div>
            <div>
                <label htmlFor="descripcion">Descripción </label>
                <textarea type="text" id="descripcion" onChange={(evento => setDescripcion(evento.target.value))}></textarea>
            </div>
            <div>
                <button className="boton" value="Boton_envio">Agregar tarea</button>
            </div>
        </form>
    );
}

export default Form;