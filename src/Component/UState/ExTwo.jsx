import React, { useState } from 'react'

function ExTwo() {
const [showMessage,hideMessage]=useState(false)




  return (


    <div>ExTwo
{showMessage && <p>Secret Message!!</p>}
<button onClick={()=> hideMessage(!showMessage)}>
    {showMessage ? "hide":"show"} Button with Secret Message 

</button>



    </div>


  )
}

export default ExTwo