import AccContent from "../AccContent/AccConten"
import AccHeader from "../AccHeader/AccHeader"
import useToggle from "../HookToggle/useToggle"



function Accordion() {


  const { status: expand, toggleStatus: toggleExpand } = useToggle()

  const content = 'Product Info Content'
  const title = 'Product Info'

  // const [expand, setExpand] = useState(false)
  // function toggleExpand() {
  //   return setExpand(prevExpand => !prevExpand)
  // }
  // console.log('expander', expand)
  return (

    <div className="accordion">
      <AccHeader
        expand={expand}
        toggleExpand={toggleExpand}
        title={title}
      ></AccHeader>
      <AccContent expand={expand} content={content} />
    </div>

  )
}

export default Accordion