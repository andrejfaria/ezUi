
import { Button } from "@ceiia/button";
import { useNavigate } from 'react-router-dom';
import './_navigation.scss'
function Navigation() {

  const navigate = useNavigate()


  return (
    <nav className="nav-bar">
      <Button
        className="menu-btn"
        label='TaskList'
        type='button'

        onClick={() => {
          navigate('/task-list');
        }}
      >

      </Button>
      <Button
        className="menu-btn"
        label='Completed Tasks'
        type='button'
        onClick={() => {
          navigate('/completed-tasks');
        }}
      >

      </Button>
      <Button
        className="menu-btn"
        label='About'
        type='button'

        onClick={() => {
          navigate('/about');
        }}
      >

      </Button>


    </nav>
  )
}

export default Navigation