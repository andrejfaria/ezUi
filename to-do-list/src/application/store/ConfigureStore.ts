import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../models/Task'


export const store = configureStore({
  reducer: {
    task: taskReducer,

  }
})

export type RootState = ReturnType<typeof store.getState>
export type TaskDispatch = typeof store.dispatch