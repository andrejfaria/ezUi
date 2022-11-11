function AccContent(props: any) {
  const { expand, content } = props
  return (
    <>
      {expand ? <div className='content'>{content}</div> : null}
    </>
  )
}

export default AccContent