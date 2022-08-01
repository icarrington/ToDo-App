import React from 'react';
import './Sidebar.css';
//I plan on adding a Calendar functionality that shows all tasks on the calendar.

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
      <button className='sidebar--button'>My List</button>
      <button className='sidebar--button'>Calendar</button>
    </div>
  )
}
