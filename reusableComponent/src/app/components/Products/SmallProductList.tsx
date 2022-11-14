import React from 'react'

function SmallProductList({ products }) {
  const { name, price } = products;
  return (

    <h3>
      Name : {name} - price {price}
    </h3>
  )
}

export default SmallProductList