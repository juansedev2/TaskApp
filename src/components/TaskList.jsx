// ! Este componente cargará con la lista de las tareas y recibe como parámetro props desglosado que sería
// ! el arreglo de tareas
import Card from "./Card";

export default function TaskList({tareas}) {

  // * Comprobar que hayan tareas
  if (tareas.length === 0) {
    return (
      <main>
        <h1>No hay tareas actualmente</h1>
      </main>
    );
  }

  return (
    <main>
      {tareas.map((tarea) => {
        return(
          <Card key={tarea.id} tarea={tarea}/>
        );
      })}
    </main>
  );
}
