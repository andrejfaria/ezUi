import { Reducer, useReducer } from "react";

const initialState = {
  counter: 0
}

type ACTIONTYPES =
  | { type: "incr"; payload: number }
  | { type: 'decr'; payload: number }
  | { type: 'stop'; payload: number }


function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "incr":
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "decr":
      return {
        ...state,
        counter: state.counter - action.payload
      };
    case "stop":
      return {
        ...state,
        counter: action.payload
      }
    default:
      throw new Error("Bad Action")
  }
}


function UseReducerComponent() {

  const [state, dispatch] = useReducer(counterReducer, initialState)


  return (
    <div>
      <h2>UseReducer</h2>
      <p>{state.counter}</p>
      <div>
        <button
          onClick={() => dispatch({
            type: "incr",
            payload: 5
          })
          }>Increment</button>

        <button
          onClick={() => dispatch({
            type: "decr",
            payload: 5
          })
          }>Decrement</button>
      </div>

      <button
        onClick={() => dispatch({
          type: "stop",
          payload: 0
        })
        }>Reset</button>
    </div >
  )
}




export default UseReducerComponent