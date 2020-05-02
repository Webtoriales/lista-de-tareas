import React, { Component } from 'react';

class Todo extends Component{
  render() {
    const { todo, index, toggleTodo, deleteTodo } = this.props;
    return(
      <li key={todo.title}>
        <span className={`titulo-tarea ${todo.completed ? "completed" : ""}`}>{todo.title}</span>
        <span
          role="img"
          aria-label="emoji"
          className="icono-tarea"
          onClick={toggleTodo}
          data-index={index}
        >
          🆗
        </span>
        <span
          role="img"
          aria-label="emoji"
          className="icono-tarea"
          onClick={deleteTodo}
          data-index={index}
        >
          ❌
        </span>
      </li>
    )
  }
}

export default Todo;