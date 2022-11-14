import React from 'react'

function RegularList({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          {... { [resourceName]: item }}
        />
      ))}

    </>
  )
}

export default RegularList