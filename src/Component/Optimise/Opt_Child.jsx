import React, { memo } from 'react'

function Opt_Child() {
  console.log("Optimise child");
  
  return (
    <div>Opt_Child</div>
  )
}

export default memo (Opt_Child)