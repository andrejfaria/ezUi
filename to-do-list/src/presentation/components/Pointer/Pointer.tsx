import { pointerProps } from "./pointer-types"

function Pointer(props: pointerProps) {
  return (
    <div>

      < img src="https://static.wixstatic.com/media/e565ce_1c618fa47cba4c129ac08c704c54b1c2.jpg/v1/fit/w_2500,h_1330,al_c/e565ce_1c618fa47cba4c129ac08c704c54b1c2.jpg"
        style={{ position: 'absolute', width: '5%', left: props.x, top: props.y }}
        alt="" />
    </div>

  )
}

export default Pointer