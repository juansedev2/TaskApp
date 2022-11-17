// ! Este componente contendrá toda la aplicación (componente que contendrá a los demás)
// ! Importamos el componente de TaskList
import TaskList from "./TaskList";
import Form from "./Form";
import Cabecera from "./Header";
import Footer from "./Footer";
import { tasks as tks } from "../data/Tasks";
import { useState, useEffect } from "react";
/**
 * !¿Porqué App contiene a tks?
 * !Acá está el concpto de UI components tree, donde si necesitamos que un recurso (en este caso la data) pueda ser usada por
 * !componentes hijos, un componente padre deberá contenerlo y podrá así entoncs compartirlo con sus hijos, en este caso
 * !necesitamos compartir el arreglo de tareas para que Form y TaskList puedan usarlo, por lo tanto TaksList ya no necesita
 * !cargar con esa responsabilidad, ya no necesita tener estado
 */

function App(){

  // ! Crear el estado del componente como un arreglo inicial
  const [task, setTask] = useState([]);

  // ! Al inicio de crear un componente, tks no existe, por lo tanto debemos indicarlo con useEffect cuando
  // !cargue el componente (recordar que [] indica que solo se ejecute 1 vez cuando se cargue la página)
  useEffect(() => setTask(tks), []);

  /* 
  ! Necesitamos una función que pueda agregar más tareas, pero recordemos que esa responsabilidad es del formulario...
  ! pero el no tien el arreglo de tareas...¿Que hacemos?, sencillo, le enviamos la función que el necesita con la data
  ! y de esa forma el puede manipularlo. La lógica es la siguiente: App le envía la función al Form, Form lo manipulará
  ! y le dará más información, que al final entonces se le regresará a App
  */

  function crearTarea(nueva_tarea) {
    // ! Lógica: asignar a tks una actualización del mismo y lo nuevo es el operador spread, que es un rápido clonado de []
    // ![...arreglo, elemento_nuevo] que retorna el arreglo anterior más el elemento agregado, pero NO modifica el original
    // !salvo este caso que estamos actualizando el estado
    // ! Ahora bien, estamos agregando un nuevo elemento pero requiriendo los datos del form que son el título y la desc, esto
    // !es así porque el id toca actualizao según el tamaño del [] y solo App tiene acceso a él
    setTask([...task, {
      id: task.length,
      titulo : nueva_tarea.titulo,
      descripcion : nueva_tarea.descripcion
    }]);
  }

  return(
    <>
      <Cabecera/>
      {/*Enviamos la función al form para que agregue la tarea y nos lo regrese para actulizarla*/}
      <Form crearTarea = {crearTarea}/>
      {/*Enviamos el arreglo a TaskList el props de task*/}
      <TaskList tareas = {task}/>
      <Footer/>
    </>
  );
}

export default App;