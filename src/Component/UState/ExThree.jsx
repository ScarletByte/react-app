import React, { useState } from 'react'

function ExThree() {
    const [showMessage,hideMessage]=useState(false)

    const [name,setName]=useState("athina")

  return (
    <div>ExThree
{showMessage && <p className='text-blue-700 bg-amber-200 border-b-black'>
    New Secret Message!</p>}

<button onClick={()=>hideMessage(true)}>Click me to show!</button>
<button onClick={()=>hideMessage(false)}>Click me to hide!</button>

<button onClick={()=>setName("Ankit")}>Click for name!</button>
<p>Hello my name is {name}</p>

    </div>
  )
}

export default ExThree


//homework- create a new file Greatest.jsx
// greatest of two numbers using useState- 
// create 2x input- 
// user adds 2 x numbers (one each input)
//  then useState for greatest (onClick)