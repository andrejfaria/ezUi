import { RootState } from './../store/ConfigureStore';
import { createSlice } from "@reduxjs/toolkit";
import data from '../../data';
import { v4 as uuidv4 } from 'uuid';


export interface Task {
  id: string,
  description: string,
  day?: string,
  reminder?: boolean,
}

// TaskState
export interface taskState {
  tasks: Task[],
}

export interface TaskResponse {
  description: string,
  reminder: boolean,
}

const initialState: taskState = {
  tasks: data,

}


const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setAddTask: (state, action) => {
      console.log(action)
      // state.tasks.push(action.payload)
      state.tasks = [...state.tasks, action.payload]
    },
    setRemoveTask: (state, action) => {
      const { id } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id)
      if (existingTask) {
        state.tasks = state.tasks.filter(task => task.id !== id)
      }
      // state.tasks = state.tasks.filter((id) => id !== action.payload)
    },
    setUpdateTask: (state, action) => {
      const { id, description, day } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id)
      if (existingTask) {
        existingTask.description = description;
        existingTask.day = day;
      }
    }

  }

})


export const { setAddTask, setRemoveTask, setUpdateTask } = taskSlice.actions
export default taskSlice.reducer;
export const taskValue = (state: RootState) => state.task.tasks
