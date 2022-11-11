import { useContext } from "react";
import { AppContext } from "../AccordionComponent/Accordion";

function IconComponent(props: any) {
  const { isOpen, isClose } = props;
  const { expand } = useContext(AppContext)

  return (
    <span>
      {expand ? isOpen : isClose}
    </span>
  )
}

export default IconComponent