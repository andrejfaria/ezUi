import { useEffect, useState } from "react"

function UseEffectComponent() {

  const [value, setValue] = useState<number>(1)

  // recebe uma função que retorna void ou função
  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue((v) => v + 1);
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div>
      <h2>UseEffectComponent</h2>
      {value}
    </div>
  )
}

export default UseEffectComponent