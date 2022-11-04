import { Button } from '@ceiia/button';
import { useLocation } from 'react-router-dom';
import CloseButton from '../CloseBtn/CloseBtn';
import './_header.scss'

function Header() {
  const title = 'Task App'
  return (
    <div className="header">
      <h1>{title}</h1>
      <CloseButton />
    </div>
  )
}
export default Header;