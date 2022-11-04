import './App.scss'
import { Task } from './presentation/components/Task/Task'
import AddTask from './presentation/components/AddTask/AddTask'
import Header from './presentation/components/Header'
import Tasks from './presentation/components/Tasks/Tasks'


function App() {

  return (
    <div >
      <Header />
      <AddTask />
      <Tasks />
    </div >

  )
}

export default App
