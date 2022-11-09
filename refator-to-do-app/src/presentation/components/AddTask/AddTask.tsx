import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAddTask, taskValue } from '../../../app/models/Task'
import { useTaskDispatch, useTaskSelector } from '../../../app/store/hooks'
import Button from '../Button'
import TextField from '../TextField'
import { v4 as uuidv4 } from 'uuid';




function AddTask() {

  const dispatch = useTaskDispatch()
  const navigate = useNavigate()

  const [values, setValues] = useState({
    description: '',
    day: ''
  });


  const handleAddTask = () => {
    setValues({ description: '', day: '' })
    dispatch(setAddTask({
      id: uuidv4(),
      description: values.description,
      day: values.day
    }))
    navigate('/')
  }




  return (

    <div className="text-field">
      <TextField
        label="Task"
        onChange={(e) => setValues({ ...values, description: e.target.value })}
        value={values.description}
        inputProps={{ type: 'text', placeholder: 'insert task description' }}

      />
      <br />
      <TextField
        label="Day"
        inputProps={{ type: 'text', placeholder: 'insert day' }}
        onChange={(event: any) => setValues({ ...values, day: event.target.value })}
        value={values.day}
      />
      <Button onClick={handleAddTask}>Submit</Button>
    </div>

  )
}

export default AddTask


/*



  const tasks = useTaskSelector(taskValue)
  console.log(tasks)

  const dispatch = useTaskDispatch()
  const [text, setText] = useState("")
  const [day, setDay] = useState("")
  const [reminder, setReminder] = useState(false)


  const handleChange = () => {
    setReminder(!reminder)
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!text || !day) {
      alert('Insert description')
      return
    }


    dispatch(setNewTask({
      id: 5,
      description: text,
      day: day,
      reminder: reminder
    }))



  }

 
<>
      <p>Add New Task</p>

      <form className="add-form" onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input
            type="text"
            value={text}
            placeholder="Add task"
            onChange={(event) => setText(event.target.value)}
          />

          <input
            type="text"
            value={day}
            placeholder="Add day"
            onChange={(event) => setDay(event.target.value)}
          />

          <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input
              type="checkbox"
              checked={reminder}
              onChange={() => handleChange()}
            />
          </div>

          <input
            type="submit"
            value="Save Task"
          />
        </div>
      </form>


    </>
 */