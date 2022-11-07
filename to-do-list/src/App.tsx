import './App.scss'
import { Task } from './presentation/components/Task/Task'
import AddTask from './presentation/components/AddTask/AddTask'
import Header from './presentation/components/Header'
import Tasks from './presentation/components/Tasks/Tasks'
import Navigation from './presentation/components/Navigation'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Callout from './presentation/components/Callout/Callout'
import useMousePosition from './presentation/components/MousePosition/MousePosition'
import Pointer from './presentation/components/Pointer/Pointer'


function App() {

  const mousePosition = useMousePosition();


  return (
    <>


      <Pointer {...mousePosition} />




      <BrowserRouter>



        <Routes>
          <Route path='/' element={<Header />} />



          {/* <AddTask />
        <Tasks /> */}
        </Routes>


      </BrowserRouter>

      <Callout>
        <h2>Callout informação</h2>
        <p>texto para callout</p>
      </Callout>

      <Callout>Callout input
        <input type="text" />
        <button type="submit">ok</button>
      </Callout>
      <div>
        <h5>mouse position is :</h5>
        <p>{mousePosition.x} | {mousePosition.y}</p>
      </div>

    </>
  )
}

export default App
