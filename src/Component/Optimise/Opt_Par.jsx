import React, { useState } from 'react'
import Opt_Child from './Opt_Child'

function Opt_Par() {
const [count,setCount]= useState(0)

function inc(){
    setCount(count+1)
}


    console.log("Optimise parent");
    


  return (
    <div>Opt_Par
        <Opt_Child/>

        <button onClick={inc}>Increase!</button>
    </div>
  )
}

export default Opt_Par