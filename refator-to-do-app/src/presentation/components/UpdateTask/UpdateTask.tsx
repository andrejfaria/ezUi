import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { setUpdateTask, taskValue } from '../../../app/models/Task'
import { useTaskDispatch, useTaskSelector } from '../../../app/store/hooks'
import Button from '../Button';
import TextField from '../TextField';

function UpdateTask() {

  const params = useParams()
  const dispatch = useTaskDispatch()
  const tasks = useTaskSelector(taskValue)
  const navigate = useNavigate()
  const existingTask = tasks.filter(task => task.id === params.id)
  const { description, day } = existingTask[0]

  const [values, setValues] = useState({
    description,
    day
  });


  const handleUpdateTask = () => {
    setValues({ description: '', day: '' })
    dispatch(setUpdateTask({
      id: params.id,
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
      <Button onClick={handleUpdateTask}>Edit</Button>
    </div>

  )
}

export default UpdateTask
