import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // una lista con cada una de las tareas a realizar **
      // cada una de las tareas puede tener:
        // un boton para marcar la tarea como completada **
        // un boton para eliminar la tarea **
    // formulario
      // una caja de texto para ponerle un titulo a la tarea
      // un boton para agregar la tarea al la lista

    return (
      <div className="app">
        <div className="lista-tareas-contenedor">
        <h1 className="title">Lista de Tareas</h1>
        <ul>
          <li>
            <span className="titulo-tarea">Aprender Javascript</span>
            <span role="img" aria-label="emoji" className="icono-tarea">
              🆗
            </span>
            <span role="img" aria-label="emoji" className="icono-tarea">
              ❌
            </span>
          </li>
          <li>
            <span className="titulo-tarea">Aprender React</span>
            <span role="img" aria-label="emoji" className="icono-tarea">
              🆗
            </span>
            <span role="img" aria-label="emoji" className="icono-tarea">
              ❌
            </span>
          </li>
          <li>
            <span className="titulo-tarea">Suscribirse a Webtoriales</span>
            <span role="img" aria-label="emoji" className="icono-tarea">
              🆗
            </span>
            <span role="img" aria-label="emoji" className="icono-tarea">
              ❌
            </span>
          </li>
        </ul>
        <form>
          <input type="text" placeholder="Agrega aqui tu tarea"></input>
          <button>
            <span  role="img" aria-label="emoji">➕</span>
          </button>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
