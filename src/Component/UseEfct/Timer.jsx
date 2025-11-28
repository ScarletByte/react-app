import React, { useEffect, useState } from 'react'


function Timer() {
    // step 1 use state and set interval
const  [time, setTime]= useState(0)
const [running,isRunning]=useState(false)
// var intervalId=setInterval(function(){
//     setTime(time+1)
// },1000)

//step 2 use effect

useEffect(() => {
if (!running||time>=10) {
    return
}
var intervalId=setInterval(function(){
setTime(time+1)
},1000)

return function () {
clearInterval(intervalId)   
}

}, [time,running])

function startTime(){
    setTime(time)
    isRunning(true)
}

function stopTime(){
    isRunning(false)
}

  return (
    <div>Timer
<p>
    Time {time}
</p>
<button onClick={startTime}>Button x</button>
<button onClick={stopTime}>Button s</button>

    </div>
  )
}

export default Timer