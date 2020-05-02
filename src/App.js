import React, { Component } from 'react';

import TodoList from './components/TodoList';

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
    return (
      <div className="app">
        <div className="lista-tareas-contenedor">
        <h1 className="title">Lista de Tareas</h1>
        <ul>
          {<TodoList
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            deleteTodo={this.deleteTodo}
          />}
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
