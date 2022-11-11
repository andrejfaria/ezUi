import IconComponent from "../IconComponent/IconComponent"
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { useContext } from "react"
import { AppContext } from "../AccordionComponent/Accordion"

function AccHeader() {

  const { toggleExpand, title } = useContext(AppContext)

  return (
    <>
      <div className="accordion">
        <button
          onClick={toggleExpand}
        >
          {title}
          <IconComponent /*expand={expand}*/
            isOpen={<FaChevronDown />}
            isClose={<FaChevronRight />}>
          </IconComponent>
        </button>
      </div>
    </>
  )
}

export default AccHeader