import { useTaskDispatch, useTaskSelector } from "../../../application/store/hooks"
import Task, { taskValue } from "../../../application/models/Task"
import { addTask, setTask, removeTask } from "../../../application/models/Task"
import { useState } from "react"

function AddTask() {
  const tasks = useTaskSelector(taskValue)
  const dispatch = useTaskDispatch()
  const [task, setTask] = useState("")
  const [reminder, setReminder] = useState<boolean>(false)

  const handleChange = () => {
    setReminder(!reminder);
  };

  console.log(tasks)

  return (
    <>
      <div>
        <label>Add task</label>
        <input
          type="text"
          placeholder="insert task"
          value={task}
          onChange={(event) => {
            // console.log(event.target.value)
            setTask(event.target.value)
          }}
        />
        <div>
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            onChange={() => {
              handleChange()
            }}
          />
        </div>

        <button onClick={() => {
          dispatch(addTask({ description: task, reminder: reminder }))
        }
        }>save
        </button>
        {/* <button onClick={(event: any) => {
          event.preventDefault()
          console.log(event.target.value, 'evento target value')
          dispatch(addTask({
            id: i + 1,
            description: event.target.value,
            done: false
          }))
        }
        } >Ok</button> */}
      </div>
    </>
  )
}

export default AddTask