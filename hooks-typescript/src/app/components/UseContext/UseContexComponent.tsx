import { useContext, useState } from 'react'
import UserContext, { UserState } from '../../store'


function ConsumerComponent() {

  const user = useContext<UserState>(UserContext)

  return (
    <div>
      <div>First Name : {user.first}</div>
      <div>Last Name : {user.last}</div>
    </div>
  )
}



function UseContexComponent() {

  const [user, setUser] = useState<UserState>({
    first: 'João',
    last: 'Faria'
  })

  return (

    <UserContext.Provider value={user}>
      <h2>UseContexComponent</h2>
      <ConsumerComponent />
      <button
        onClick={() => setUser({
          ...user,
          first: 'Pedro',
          last: 'Costa'
        })}
      >Change Name</button>
    </UserContext.Provider >

  )
}

export default UseContexComponent