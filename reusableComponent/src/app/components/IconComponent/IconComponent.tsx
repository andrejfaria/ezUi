import { FaChevronDown, FaChevronRight } from 'react-icons/fa'

function IconComponent(props: any) {
  const { expand } = props;
  return (
    <span>
      {expand ? <FaChevronDown /> : <FaChevronRight />}
    </span>
  )
}

export default IconComponent