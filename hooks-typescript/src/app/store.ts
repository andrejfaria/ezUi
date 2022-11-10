import { createContext } from "react";

const initialState = {
  first: 'André',
  last: 'Faria'
}

export type UserState = typeof initialState
const context = createContext<typeof initialState>(initialState)
export default context;