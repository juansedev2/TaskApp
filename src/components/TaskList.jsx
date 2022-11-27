// ! Este componente cargará con la lista de las tareas y recibe como parámetro props desglosado que sería
// ! el arreglo de tareas
import Card from "./Card";
import {ContextoTareas} from "../context/TaskContext";
import { useContext } from "react";

export default function TaskList() {

  const {task} = useContext(ContextoTareas);

  // * Comprobar que hayan tareas
  if (task.length === 0) {
    return (
      <main>
        <h1 className="titulo_no_hay">No hay tareas actualmente</h1>
      </main>
    );
  }

  return (
    <section className="lista_tareas">
      {task.map((tarea) => {
        return(
          <Card key={tarea.id} tarea={tarea}/>
        );
      })}
    </section>
  );
}
