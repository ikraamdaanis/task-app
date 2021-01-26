import { useState } from 'react'
import uniqid from 'uniqid'

const Item = ({ task, deleteTask, editTask, index }) => {
  const [editedTask, setEditTask] = useState(task)
  const [editing, setEditing] = useState(false)
  const handleChange = e => {
    setEditTask(e.target.value)
  }
  return (
    <li>
      <span>
        {index + 1}: {task}{' '}
      </span>{' '}
      {editing && (
        <input
          type='text'
          id={uniqid()}
          onChange={e => handleChange(e)}
          value={editedTask}
        />
      )}
      <button
        onClick={() => {
          editing && editTask(editedTask, index)
          setEditing(editing => !editing)
        }}
      >
        {editing ? 'submit' : 'Edit'}
      </button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  )
}

export default Item
