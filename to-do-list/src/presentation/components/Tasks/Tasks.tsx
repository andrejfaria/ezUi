import { Task, taskValue } from "../../../application/models/Task"
import { removeTask } from "../../../application/models/Task"
import { useTaskDispatch, useTaskSelector } from "../../../application/store/hooks"


function Tasks() {

  const tasks = useTaskSelector(taskValue)
  const dispatch = useTaskDispatch()




  const taskList = tasks.map((task: Task) => {
    return <div

      key={task.id}>
      {task.id} - {task.reminder?.toString()}
      {task.description}
      <button onClick={() => dispatch(removeTask(task?.id))}>Delete</button>

    </div>

  })

  return (
    <>
      {taskList}

    </>
  )


}









export default Tasks



// <>
    //   {
    //     <Task


    //     />
    //   }
    //   {{tasks.map((task) => (
    //     <Task
    //       key={task.id}
    //       description={task.description}

    //     />

    //   )

    //      <span className="id">{task.id}
    //       {task.description} </span>

    //   )
    //   }}
    // </>