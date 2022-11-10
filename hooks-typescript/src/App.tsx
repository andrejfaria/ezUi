import './App.css'
import UseContexComponent from './app/components/UseContext/UseContexComponent'
import UseEffectComponent from './app/components/UseEffectComponent/UseEffectComponent'
import UseReducerComponent from './app/components/UseReducer/UseReducer'
import UseStateComponent from './app/components/useStateComponent/UseStateComponent'
import UseRefComponent from './app/components/UseRefComponent/UseRefComponent'
import CustomHookComponent from './app/components/CustomHookComp/CustomHookComponent'
import PropsAsInterface from './app/components/PropsAsInterface/PropsAsInterface'
import GenericTypes from './app/components/GenericTypes/GenericTypes'
function App() {


  return (
    <div>
      <h1>Generics & Hooks with TS</h1>
      <GenericTypes />
      <hr />
      <CustomHookComponent />
      <hr />
      <br />
      <UseStateComponent />
      <hr />
      <UseEffectComponent />
      <hr />
      <UseContexComponent />
      <hr />
      <UseReducerComponent />
      <hr />
      <PropsAsInterface />
      <hr></hr>
      <UseRefComponent />
    </div>

  )
}

export default App
