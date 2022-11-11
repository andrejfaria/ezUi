
function IconComponent(props: any) {
  const { expand, FaChevronDown, FaChevronRight } = props;
  return (
    <span>
      {expand ? <FaChevronDown /> : <FaChevronRight />}
    </span>
  )
}

export default IconComponent