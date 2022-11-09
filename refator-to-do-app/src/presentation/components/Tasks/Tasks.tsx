
import { useState } from 'react'
import { setRemoveTask, setUpdateTask, taskValue } from '../../../app/models/Task'
import { useTaskDispatch, useTaskSelector } from '../../../app/store/hooks'
import UpdateTask from '../UpdateTask'
import { HiOutlineTrash, HiPencil } from "react-icons/hi"
import Button from '../Button'
import { Link } from 'react-router-dom'

function Tasks() {


  const tasks = useTaskSelector(taskValue);
  console.log(tasks)
  const dispatch = useTaskDispatch()
  const handleDeleteTask = (id: number) => {
    dispatch(setRemoveTask({ id }))
  }


  const list = () => tasks.map((task) => (

    <div className="row" key={task.id}>
      <div>
        <h3>
          {task.description}
        </h3>
        <span>
          {task.day}
        </span>
      </div>
      <div className="buttons">
        <Link to={`edit-task/${task.id}`}>
          <button>
            <HiPencil />
          </button>
        </Link>


        <button
          onClick={() => handleDeleteTask(task.id)}>
          <HiOutlineTrash />
        </button>

      </div>
    </div>
  ))


  return (
    <>
      <Link to="/add-task"><Button>Add Task</Button></Link>

      <div className='list'>
        {tasks.length ? list() : <p>No Tasks to Show</p>}
        {/* {showUpdate ? <UpdateTask setShowUpdate={setShowUpdate} /> : null} */}
      </div>


    </>
  )
}

export default Tasks


/* 
<button onClick={() => {
        dispatch(setRemoveTask(task.id))
      }}>Done</button>
      <button onClick={() => {
        setShowUpdate(true)
        dispatch(setUpdateTask({ taskId: task.id }))
      }}>Update</button>
 */