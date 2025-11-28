import React from 'react'
import NewChild from './NewChild'

function NewPar() {
    const title="Disney Black T Shirt"

  return (
    <div>
        <h1>Product Title</h1>
        <NewChild title={title}/>
        </div>
  )
}

export default NewPar