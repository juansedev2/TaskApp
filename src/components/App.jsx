// ! Este componente contendrá toda la aplicación (componente que contendrá a los demás)
// ! Importamos el componente de TaskList
import TaskList from "./TaskList";
import Form from "./Form";
import Cabecera from "./Header";
import Footer from "./Footer";
import "../styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <>
      <Cabecera/>
      <main>
        <Form/>
        <TaskList/>
      </main>
      <Footer/>
    </>
  );
}

export default App;