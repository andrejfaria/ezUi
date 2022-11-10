import React, { useState } from 'react'



function UseStateComponent() {

  const [arr, setArr] = useState<number[]>([])
  const [name, setName] = useState<string | null>(null)


  return (
    <div>
      <h2>useStateComponent</h2>

      <button onClick={() => setArr([
        ...arr,
        arr.length + 1
      ])}>Add to Array</button>
      {JSON.stringify(arr)}
      <span></span>

      <button onClick={() => setName('João')}>Set Name</button>
      {JSON.stringify(name)}



    </div >



  )
}

export default UseStateComponent