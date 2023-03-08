import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import ListadeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tarea">
      <div className='freecodecamp-logo-contendor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListadeTareas/>
      </div>
    </div>
  );
}

export default App;
