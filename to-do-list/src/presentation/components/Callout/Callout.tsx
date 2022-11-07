import './_callout.scss'

function Callout(props: any) {
  return (
    <div className="callout">
      {props.children}
    </div>
  )
}

export default Callout