import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todoTitle: "Aprender Cocina",
    todoTitle2: "Aprender Jardineria"
  }

  handleClick = () => {
    this.setState({ todoTitle: "Aprender Javascript"});
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="lista-tareas-contenedor">
        <h1 className="title">Lista de Tareas</h1>
        <ul>
          <li>
            <span className="titulo-tarea">{this.state.todoTitle}</span>
            <span role="img" aria-label="emoji" className="icono-tarea" onClick={this.handleClick}>
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
