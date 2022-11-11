import { useContext } from "react"
import { AppContext } from "../AccordionComponent/Accordion"

function AccContent() {
  // const { expand, content } = props
  const { expand, content } = useContext(AppContext)

  return (
    <>
      {expand ? <div className='content'>{content}</div> : null}
    </>
  )
}

export default AccContent