import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store/ConfigureStore.ts"

export interface Menu {
  showMenu: string
}

export interface MenuState {
  menu: ''
}

const initialMenuState: Menu = {
  showMenu: ''
}

export const menuSlice = createSlice(
  {
    name: 'Menu',
    initialMenuState,
    reducers: {

      showMenu: (state, action: PayloadAction<string>) => {
        state.menu = [...state.tasks,
        {
          id: state.tasks.length + 1,
          description: action.payload.description,
          reminder: action.payload.reminder,
        }
        ]
      },

    }
  })


export const { setTask, addTask, removeTask } = menuSlice.actions
export default menuSlice.reducer;


export const menuValue = (state: RootState) => state.menu;