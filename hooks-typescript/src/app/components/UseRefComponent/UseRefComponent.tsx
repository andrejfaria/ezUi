import { useRef } from 'react'

function UseRefComponent() {

  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div>
      <h2>UseRefComponent</h2>
      <input ref={inputRef} />
    </div>
  )
}

export default UseRefComponent