import uniqid from 'uniqid'
import Item from './Item'

const Overview = ({ tasks, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <Item
            key={uniqid()}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            index={i}
          />
        )
      })}
    </ul>
  )
}

export default Overview
