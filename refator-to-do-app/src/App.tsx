
import { Provider } from 'react-redux'
import { store } from './app/store/ConfigureStore'
import './App.css'
import Tasks from './presentation/components/Tasks'
import AddTask from './presentation/components/AddTask'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateTask from './presentation/components/UpdateTask'

function App() {

  return (
    <div className='App'>
      <h1 className="title">TASKAPP</h1>

      <BrowserRouter>
        <Provider store={store}>

          <Routes>
            <Route path='/' element={<Tasks />}> </Route>
            <Route path='/add-task' element={<AddTask />}> </Route>
            <Route path='/edit-task/:id' element={<UpdateTask />}></Route>
          </Routes>

        </Provider >
      </BrowserRouter>


    </div >
  )
}

export default App
