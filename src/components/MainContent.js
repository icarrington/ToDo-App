import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import './MainContent.css';
import List from './List';

export default function MainContent() {

  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    if(!todo.task || !todo.date) {
      alert('Please enter a task and date');
      return;
    }

    if(todos.includes(todo)) {
      alert('Please do not enter the same task twice');
      return;
    }

    setTodos(prevTodos => [todo, ...prevTodos])
  }

  function clearCompleted(data) {
    setTodos(prevTodos => {
      return (
        prevTodos.filter(value => !data[value.task])
      );
    })
  }
  
  return (
    <main>
      <h1>To Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <List todos={todos} clearCompleted={clearCompleted} />
    </main>
  )
}
