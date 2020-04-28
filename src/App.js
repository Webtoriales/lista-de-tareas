import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [
      { title: "Aprender Cocina", completed: false },
      { title: "Aprender React", completed: false },
      { title: "Suscribirse a Webtoriales", completed: true },
    ],
    inputValue: ""
  }

  toggleTodo = e => {
    const index = e.target.getAttribute("data-index");
    const todos = [...this.state.todos];
    const todo = {...todos[index]};
    todo.completed = !todo.completed;
    todos[index] = todo;
    this.setState({ todos: todos});
  }

  deleteTodo = e => {
    const index = e.target.getAttribute("data-index");
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }

  renderTodos = () => {
    return this.state.todos.map((todo, index) => {
      return(
        <li key={todo.title}>
          <span className={`titulo-tarea ${todo.completed ? "completed" : ""}`}>{todo.title}</span>
          <span
            role="img"
            aria-label="emoji"
            className="icono-tarea"
            onClick={this.toggleTodo}
            data-index={index}
          >
            🆗
          </span>
          <span
            role="img"
            aria-label="emoji"
            className="icono-tarea"
            onClick={this.deleteTodo}
            data-index={index}
          >
            ❌
          </span>
        </li>
      )
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.inputValue,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: ""
    });
  }

  render() {
    const renderedTodos = this.renderTodos()
    return (
      <div className="app">
        <div className="lista-tareas-contenedor">
        <h1 className="title">Lista de Tareas</h1>
        <ul>
          {renderedTodos}
        </ul>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Agrega aqui tu tarea"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
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
