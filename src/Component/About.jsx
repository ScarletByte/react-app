import React, { useContext, useEffect, useState } from 'react'
import { ColourContext } from './ColourPalette/ColourContext';

function About() {
  
let [count,setCount] = useState(0);
const {colour}=useContext(ColourContext)

useEffect(() => {
  document.title=`About ${count}`
}, [count])


  return (
    <div style={{background:colour}}>
      
      <h2>About</h2>
      <p>Count: {count}</p>
        <button onClick={()=>setCount(count+1)}>Click Inc!</button>

    </div>
  )
}

export default About