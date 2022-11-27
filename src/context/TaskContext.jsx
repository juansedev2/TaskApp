/*
! El objetivo de Context es ser una interfaz para los demás componentes y tendrá un componente que deberá englobar al resto
! para poder actuar como interfaz, ofreciendo contexto, la información que debe compartir. Para crear el contexto necesario
! debemos de crear dos cosas importantes, la primera es el contexto con la función createContext y será la que cargará con la
! información a compartir, lo segundo es el componente que ENGLOBA los demás componentes y este último se llama PROVIDER
*/

// ! Importar la librería de React y su función de createContext
import {createContext} from "react";
import { tasks as tks } from "../data/Tasks";
import { useState, useEffect } from "react";

// ! Creamos el contexto (almacenador de la información)
export const ContextoTareas = createContext();

// !Este es el componente del contexto
export function TaskContextProvider(props) {

  // ! Crear el estado del componente como un arreglo inicial
  const [task, setTask] = useState([]);
  const [acumulador, setAcumulador] = useState(0);

  // ! Al inicio de crear un componente, tks no existe, por lo tanto debemos indicarlo con useEffect cuando
  // !cargue el componente (recordar que [] indica que solo se ejecute 1 vez cuando se cargue la página)
  useEffect(() => {
    setTask(tks);
    setAcumulador(tks.length);
  }, []);

  /* 
  ! Necesitamos una función que pueda agregar más tareas, pero recordemos que esa responsabilidad es del formulario...
  ! pero el no tien el arreglo de tareas...¿Que hacemos?, sencillo, le enviamos la función que el necesita con la data
  ! y de esa forma el puede manipularlo. La lógica es la siguiente: App le envía la función al Form, Form lo manipulará
  ! y le dará más información, que al final entonces se le regresará a App
  */

  // * Función para crear nuevas tareas, agregando una nueva con las que haya
  function crearTarea(nueva_tarea) {
    // ! Lógica: asignar a tks una actualización del mismo y lo nuevo es el operador spread, que es un rápido clonado de []
    // ![...arreglo, elemento_nuevo] que retorna el arreglo anterior más el elemento agregado, pero NO modifica el original
    // !salvo este caso que estamos actualizando el estado
    // ! Ahora bien, estamos agregando un nuevo elemento pero requiriendo los datos del form que son el título y la desc, esto
    // !es así porque el id toca actualizao según el tamaño del [] y solo App tiene acceso a él
    setTask([...task, {
      id: acumulador,
      titulo : nueva_tarea.titulo,
      descripcion : nueva_tarea.descripcion
    }]);
    setAcumulador(acumulador + 1);
  }

  // * Función para eliminar tareas, eliminando una en específico dado un id
  function eliminarTarea(id){
    setTask(task.filter(tarea => tarea.id !== id));
  }

  return (
    <ContextoTareas.Provider value={{task, crearTarea, eliminarTarea }}>{/*nombre_del_contexto.Provider para crear el proveedor (componente proveedor)*/}
      {props.children}
    </ContextoTareas.Provider>
  );
}
/**
 * ! Debemos exportar cada parte de nuestro Context.jsx, debemos importar el contexto y el componente en el main para que
 * ! englobe a App
 */