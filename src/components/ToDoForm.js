import React, { useState } from 'react'
import './TodoForm.css'

export default function ToDoForm(props) {

  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const target= event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [target.name]: target.value
      }
    })
  }

  return (
    <div className='form'>
      <label htmlFor="task">Task:</label>
      <input 
      type="text" 
      name="task" 
      onChange={handleChange}
      />
      <label htmlFor="date">Date Due:</label>
      <input 
      type="date" 
      name="date" 
      onChange={handleChange}
      />
      <button 
      type='submit' 
      onClick={() => props.addTodo(formData)}
      className='add-task'
      >
        Add Task
      </button>
    </div>
  )
}
