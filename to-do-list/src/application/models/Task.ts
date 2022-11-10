import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/ConfigureStore';


// Task Domain
export interface Task {
  id: number,
  description: string,
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
  tasks: [],

}


export const taskSlice = createSlice(
  {
    name: 'Task',
    initialState,
    reducers: {
      setTask: (state, action: PayloadAction<string>) => {
        state.tasks = [...state.tasks,
        {
          id: state.tasks.length,
          description: action.payload,
          reminder: false,
        },
        ]
      },
      addTask: (state, action: PayloadAction<TaskResponse>) => {
        state.tasks = [...state.tasks,
        {
          id: state.tasks.length + 1,
          description: action.payload.description,
          reminder: action.payload.reminder,
        }
        ]
      },
      removeTask: (state, action: PayloadAction<number>) => {
        state.tasks = state.tasks.filter(({ id }) => id !== action.payload)
      },

    }
  })



const data = [{
  id: 0,
  description: 'tarefa_1',
  reminder: false,
},
{
  id: 1,
  description: 'tarefa_2',
  reminder: false,
},
{
  id: 2,
  description: 'tarefa_3',
  reminder: false,
}]

export const { setTask, addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer;


export const taskValue = (state: RootState) => state.task.tasks
