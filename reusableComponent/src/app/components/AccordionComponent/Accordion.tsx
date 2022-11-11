import { createContext } from "react"
import AccContent from "../AccContent/AccConten"
import AccHeader from "../AccHeader/AccHeader"
import useToggle from "../HookToggle/useToggle"


export const AppContext = createContext<any>({})


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

    <AppContext.Provider value={{ expand, toggleExpand, title, content }}>
      <div className="accordion">
        <AccHeader
        // expand={expand}
        //toggleExpand={toggleExpand}
        //title={title}
        ></AccHeader>
        <AccContent /*expand={expand} content={content}*/ />
      </div>
    </AppContext.Provider>
  )
}

export default Accordion