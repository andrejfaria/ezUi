export interface HeadingProps {
  title: string;
}

export function Heading({ title }: HeadingProps) {
  return (
    <h4>{title}</h4>
  )
}



function PropsAsInterface() {

  const title = "PropsAsInterface"

  return (
    <div>
      <Heading title={title}></Heading>
    </div>
  )
}

export default PropsAsInterface