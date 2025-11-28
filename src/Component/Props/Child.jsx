import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>Child</h1>
        <p>My name is {props.fname}</p>
        <p>My age is {props.age}</p>
        <p>My city is {props.city}</p>
        </div>
  )
}

export default Child