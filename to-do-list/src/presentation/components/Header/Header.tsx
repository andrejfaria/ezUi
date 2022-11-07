import { Button } from '@ceiia/button';
import AddBtn from '../AddBtn/AddBtn';
import Navigation from '../Navigation';
import './_header.scss'

function Header() {
  const title = 'Task App'
  return (
    <>
      <div className="header">
        <h1>{title}</h1>
        <AddBtn />
      </div>
      <div><Navigation /></div>
    </>


  )
}
export default Header;