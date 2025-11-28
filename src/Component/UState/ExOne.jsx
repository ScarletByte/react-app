import React, { useState } from 'react'

function ExOne() {
    let [count,setCount] = useState(0);
    //normal function
    // function inc() {
    // setCount(count+1)    
    // }

    function dec() {
        if (count>0) {
        setCount(count-1)    

        }
    }

   

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-4">  
       <h3 className="text-2xl font-bold text-blue-600 ">ExOne</h3>
       <p className="text-black font-bold border-b-2 px-4 py-2 rounded-lg bg-green-400">Count: {count}</p>
       {/* normal function */}
        {/* <button onClick={inc}>Click Inc!</button> */}
        <button onClick={()=>setCount(count+1)}>Click Inc!</button>

        <button onClick={dec}>Click Dec!</button>


{/* disable if count > 5 */}
<button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition" 
onClick={()=>setCount(count+1)} disabled={count>= 5} >Click Count Max 5!</button>
     

<button className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold transition" 
onClick={dec}>Click Count Dec!</button>
    </div>
  )
}

export default ExOne



