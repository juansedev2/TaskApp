/*
! El objetivo de Context es ser una interfaz para los demás componentes y tendrá un componentes que deberá englobar al resto
! para poder actuar como interfaz, ofreciendo contexto, la información que debe compartir. Para crear el contexto necesario
! debemos de crear dos cosas importantes, la primera es el contexto con la función createContext y será la que cargará con la
! información a compartir, lo segundo es el componente que ENGLOBA los demás componentes y este último se llama PROVIDER
*/

// ! Importar la librería de React y su función de createContext
import {createContext} from "react";

// ! Creamos el contexto (almacenador de la información)
export const ContextoTareas = createContext();

// !Este es el componente del contexto
export function TaskContextProvider(props) {

  // ! Creamos un valor arbitrario que podrá ser usado por componentes DENTRO DEL CONTEXTO y lo enviamos en la prop value
  let valor = "Este es una variable del TaskContext";

  return (
    <ContextoTareas.Provider value={valor}>{/*nombre_del_contexto.Provider para crear el proveedor (componente proveedor)*/}
      {props.children}
    </ContextoTareas.Provider>
  );
}
/**
 * ! Debemos exportar cada parte de nuestro Context.jsx, debemos importar el contexto y el componente en el main para que
 * ! englobe a App
 */