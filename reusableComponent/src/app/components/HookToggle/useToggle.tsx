import { useState } from 'react'

function useToggle() {
  const [status, setStatus] = useState(false)
  const toggleStatus = () => setStatus(prevStatus => !prevStatus)
  return {
    status, toggleStatus
  }
}

export default useToggle