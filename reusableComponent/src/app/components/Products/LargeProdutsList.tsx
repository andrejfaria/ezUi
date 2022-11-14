import React from 'react'

function LargeProdutsList({ products }) {
  const { name, price, description, rating } = products
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h2>Description</h2>
      <p>{description}</p>
      <p>Rating</p>
      <p>{rating}</p>
    </>
  )
}

export default LargeProdutsList