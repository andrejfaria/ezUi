import IconComponent from "../IconComponent/IconComponent"
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

function AccHeader(props: any) {
  const { title, expand, toggleExpand } = props

  return (
    <>
      <div className="accordion">
        <button
          onClick={toggleExpand}
        >
          {title}
          <IconComponent expand={expand} FaChevronDown={FaChevronDown} FaChevronRight={FaChevronRight}> </IconComponent>
        </button>
      </div>
    </>
  )
}

export default AccHeader