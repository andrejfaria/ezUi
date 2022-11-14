import React from 'react'

function LargePeopleList({ person }) {
  const { age, name, hairColor, hobbies } = person;
  return (
    <>
      <h3>Name : {name}  </h3>
      <p>
        Age : {age} years
      </p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies : </h3>
      <ul>
        {hobbies.map((hobby => <li key={hobby}>{hobby}</li>))}
      </ul>
    </>
  )
}

export default LargePeopleList