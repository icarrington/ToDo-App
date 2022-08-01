import React from 'react'

//This Sort Component should sort the list based on the following options.

export default function Sort() {
  return (
    <div>
      <label htmlFor="sort">Sort List By:</label>
        <select name="sort">
          <option>Order Added</option>
          <option>Date Due</option>
          <option>Alphabet</option>
        </select>
    </div>
  )
}
