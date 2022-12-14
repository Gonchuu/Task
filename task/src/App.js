import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/Task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo4 from './hooks/Ejemplo4'
import MiComponenteConContexto from './hooks/Ejemplo3';
import GreetingStyled from './components/pure/GreetingStyled';
import Father from './components/container/Father';
import Optionalrender from './components/pure/OpcionalRender';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import Fetchexample from './components/pure/FetchService';
import Axiosexample from './components/pure/AxiosExample';
import Axioscrudexample from './components/pure/axiosCRUDExample';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* componente de listado de tareas */}
        <TaskListComponent></TaskListComponent>
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre = 'Gonza'>
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name = 'Gonza'></GreetingStyled> */}
        {/* <Father></Father> */}
        {/* <Optionalrender></Optionalrender> */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* <AsyncExample></AsyncExample> */}
        {/* <ObservableExample></ObservableExample> */}
        {/* <Fetchexample></Fetchexample> */}
        {/* <Axiosexample></Axiosexample> */}
        {/* <Axioscrudexample></Axioscrudexample> */}
      {/* </header> */}
    </div>
  );
}

export default App;

