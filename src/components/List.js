import React, { useState } from 'react'
import './List.css';

export default function List(props) {

  const [listData, setListData] = useState({});

  function handleChange(event) {
    setListData(prevListData => {
      return (
        {
          ...prevListData,
          [event.target.name]: event.target.checked
        }
      )
    })
  }

  const list=props.todos.map(todo =>{
    return (
    <li
    key={todo.task} 
    className='list-item'
    >
      <input 
      type='checkbox'
      onChange={handleChange}
      name={todo.task}
      />
      <span>{todo.task}</span>
      <span>Date Due: {todo.date}</span>
    </li>)
  })

  return (
    <div className='board'>
      <button
      className='clear'
      onClick={() => {
        props.clearCompleted(listData);
        setListData({});
      }}
      >
        Clear Completed
      </button>
      <ul className='list'>
        {list}
      </ul>
    </div>
  )

}
