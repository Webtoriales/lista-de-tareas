import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
         <h1 className="title">Lista de Tareas</h1>
        <ul>
          <li>
            Aprender Javascript
            <span role="img" aria-label="emoji">
              🆗
            </span>
            <span role="img" aria-label="emoji">
              ❌
            </span>
          </li>
          <li>
            Aprender React
            <span role="img" aria-label="emoji">
              🆗
            </span>
            <span role="img" aria-label="emoji">
              ❌
            </span>
          </li>
          <li>
            Suscribirse a Webtoriales
            <span role="img" aria-label="emoji">
              🆗
            </span>
            <span role="img" aria-label="emoji">
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
    );
  }
}

export default App;
