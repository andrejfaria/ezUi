import React, { useEffect, useState } from 'react'

function useMousePosition() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMousePosition = (event: MouseEvent) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY

    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMousePosition)
    return () => {
      window.removeEventListener('mousemove', handleMousePosition)
    }
  }, [])

  return mousePosition


}

export default useMousePosition