import { useState, useContext} from "react";
import {ContextoTareas} from "../context/TaskContext";
import {Input, Label, Button} from "reactstrap";

// ! Este componente contien el formulario de las tareas
function Form() {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const {crearTarea} = useContext(ContextoTareas);

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
        <section className="seccion_formulario">
            <form onSubmit={capturarDatos} id="formulario">
                <div className="contenedor_datos_form">
                    <Label for="titulo">Título de la tarea</Label>
                    <Input id="titulo" name="titulo" type="text" minLength={5} maxLength={20} autoFocus required onChange={(evento => setTitulo(evento.target.value))}/>
                </div>
                <div className="contenedor_datos_form">
                    <Label for="descripcion">Descripción</Label>
                    <Input type="textarea" id="descripcion" rows="5" minLength={5} maxLength={100} required onChange={(evento => setDescripcion(evento.target.value))}/>
                </div>
                <div className="div_boton">
                    <Button className="boton" value="Boton_envio">Agregar tarea</Button>
                </div>
            </form>
        </section>
    );
}

export default Form;