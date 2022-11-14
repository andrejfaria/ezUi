import React from 'react'



function SmallPeopleList({ person }) {

  const { age, name } = person;
  return (
    <p>Name : {name} , Age : {age} years </p>
  )
}

export default SmallPeopleList