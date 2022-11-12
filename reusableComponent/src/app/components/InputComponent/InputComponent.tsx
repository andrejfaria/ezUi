import React, { useState } from 'react'

function InputComponent(props: any) {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input
        value={value}
        onChange={handleChange} />
      <br />
      {props.renderText(value)}
    </>
  )

}

export default InputComponent