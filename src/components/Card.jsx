// * Desde cualquier componente DENTRO DEL CONTEXTO, se puede usar el contexto mismo
// ! Importamos la función useContext para usar el contexto
import { useContext } from 'react';
//! Importamos el CONTEXTO (VARIABLE DE LA INFORMACIÓN)
import { ContextoTareas} from '../context/TaskContext';
import { Card as Crd, CardTitle, Button, Input} from "reactstrap";

function Card({tarea}) {

  // ! Recupermos el valor compartido con value en TaskContext a través de la función useContext(nombre_contexto)
  const {eliminarTarea}= useContext(ContextoTareas);

    return(
        <Crd className='card_contenedor'>
          <CardTitle className='card_titulo'>{tarea.titulo}</CardTitle>
          <Input className="card_descripcion" id="descripcion" name="descripcion" type="textarea" cols="30" rows="5" defaultValue={tarea.descripcion} disabled/>
          <Button style={{width:"55%", margin:"auto", fontSize:"1.1rem"}}color="danger" onClick={() => eliminarTarea(tarea.id)}>Eliminar Tarea</Button>
        </Crd>
    );
}

export default Card;