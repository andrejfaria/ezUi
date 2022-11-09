import { taskValue } from "../../../app/models/Task"
import { useTaskSelector } from "../../../app/store/hooks"


function TaskDetails() {

  const tasks = useTaskSelector(taskValue)

  const task = tasks.map((task) => (
    <p
      key={task.id}>
      {task.description}
      <button>ok</button>
    </p>

  ))



  return (

    < div > taskDetails { }</div >

  )
}

export default TaskDetails