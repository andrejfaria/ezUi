import React, { useState } from 'react'
import useToggle from '../HookToggle/useToggle'

function Editable() {
  // const [editable, setEditable] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const { status: editable, toggleStatus: toggleEditable } = useToggle()

  const handleInputValue = (event: any) => {
    setInputValue(event.target.value)
  }

  // const toggleEditable = () => setEditable(edit => !edit)


  return (
    <div>
      {editable ? (
        <label>
          Title:
          <input type="text"
            value={inputValue}
            onChange={handleInputValue}></input>
        </label>
      ) : (
        <>Title {inputValue} </>
      )}

      <br />
      <button onClick={toggleEditable}>{editable ? 'submit' : 'edit'}</button>
    </div>
  )
}




export default Editable