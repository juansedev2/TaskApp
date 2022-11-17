import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//!React.StrictMode es un componente que ayuda a mostrar errores mientras se está programando dentro del componente hijo
//!así entonces es una buena práctica usarlo