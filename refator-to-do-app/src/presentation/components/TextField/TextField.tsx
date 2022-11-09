import React from 'react'

function TextField({ label, inputProps, onChange, value }) {
  return (
    <div className='text-field'>
      <label>{label}</label>
      <input {...inputProps}
        onChange={onChange}
        value={value} />

    </div>
  )
}

export default TextField