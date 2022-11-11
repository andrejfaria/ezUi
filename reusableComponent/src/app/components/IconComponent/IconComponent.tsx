
function IconComponent(props: any) {
  const { expand, isOpen, isClose } = props;
  return (
    <span>
      {expand ? isOpen : isClose}
    </span>
  )
}

export default IconComponent