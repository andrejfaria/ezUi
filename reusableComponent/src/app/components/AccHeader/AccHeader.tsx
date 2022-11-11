import IconComponent from "../IconComponent/IconComponent"

function AccHeader(props: any) {
  const { title, expand, toggleExpand } = props

  return (
    <div className="accordion">
      <button
        onClick={toggleExpand}
      >
        {title}
        <IconComponent expand={expand} />
      </button>
    </div>
  )
}

export default AccHeader