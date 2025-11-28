import React from 'react'
import Child from './Child'

function Parent() {
    const fname="Athina"
    const age=37
    const city="London"

  return (
    <div>
        <h1>Parent
        </h1>
    <Child fname={fname} age={age} city="London"/>
    </div>
  )
}

export default Parent