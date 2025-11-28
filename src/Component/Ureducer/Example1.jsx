import React, { useReducer } from 'react'

//step2//

let initialState=0

function reducer(state,action) {
switch (action) {
    case "inc":
        return state+1
            
        
    case "dec":
        return state-1



    default:
        return state
}
}



function Example1() {
  //step1//
    let [count,dispatch]= useReducer (reducer,initialState)



  return (
    <div>
        <h1>Example1</h1>
        
        {/* step3 */}
        <p>{count}</p>
        <button onClick={ ()=> dispatch("inc")}>Increase</button>

        <button onClick={ ()=> dispatch("inc")}>Decrease</button>
        
        </div>
  )
}

export default Example1