// ! Importamos la función useContext para usar el contexto
import { useContext } from 'react';
//! Importamos el CONTEXTO (VARIABLE DE LA INFORMACIÓN)
import { ContextoTareas} from '../context/TaskContext';

function Card({tarea, eliminarTarea}) {

  // ! Recupermos el valor compartido con value en TaskContext a través de la función useContext(nombre_contexto)
  const valor = useContext(ContextoTareas);

  console.log(valor);

    return(
        <div>
          <h1>{tarea.titulo}</h1>
          <textarea name="descripcion" 
            id="drescripcion" cols="30" 
            rows="5" 
            defaultValue={tarea.descripcion}
            disabled
          >
          </textarea>
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</button>
        </div>
    );
}

export default Card;