import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// ! Importamos el componente de contexto para encapsular a App
import {TaskContextProvider} from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);

//!React.StrictMode es un componente que ayuda a mostrar errores mientras se está programando dentro del componente hijo
//!así entonces es una buena práctica usarlo