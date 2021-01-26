import { useState } from 'react'
import './App.scss'
import Overview from './components/Overview'

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = e => {
    setTask(e.target.value)
  }

  const onSubmitTask = e => {
    e.preventDefault()
    setTasks(tasks => [...tasks, task])
    setTask('')
  }

  const deleteTask = i => {
    console.log('delete')
    setTasks(tasks => tasks.filter((task, index) => index !== i))
    console.log(tasks)
  }

  const editTask = (task, index) => {
    console.log('Edited')
    setTasks(tasks =>
      tasks.map((item, i) => {
        if (i === index) {
          item = task
        }
        return item
      })
    )
  }

  return (
    <div>
      <form onSubmit={e => onSubmitTask(e)} autoComplete='off'>
        <label htmlFor='taskInput'>Enter task</label>
        <input
          type='text'
          id='taskInput'
          onChange={e => handleChange(e)}
          value={task}
          required
        />
        <button type='submit'>Add Task</button>
      </form>
      <Overview tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  )
}

export default App
