import React, { useContext, useEffect } from 'react'
import Timer from './UseEfct/Timer'
import Parent from './Props/Parent'
import NewPar from './Props/NewPar'
import Prnt from './Props/ChildrenProps/Prnt'
import { ColourContext } from './ColourPalette/ColourContext'
import Minishop from './Ureducer/Minishop'
// import Example1 from './Ureducer/Example1'
import Pract from './Ureducer/Pract'
import Opt_Par from './Optimise/Opt_Par'
// import SimpleApi from './Api/SimpleApi'
// import ApiAsync from './Api/ApiAsync'
// import DataAxios from './Api/DataAxios'
// import ExOne from './UState/ExOne'
// import ExTwo from './UState/ExTwo'
// import ExThree from './UState/ExThree'

function Home() {
const {colour}=useContext(ColourContext)

  useEffect(() => {
    document.title="Home"
  }, [])
  
  return (
    <div className='to-black' style={{background:colour}}>
    <h3>Home</h3>
    {/* <ExOne/> */}
    {/* <ExTwo/>
    <ExThree/> */}
    {/* <Timer/>
    <Parent/>
    <NewPar/>
    <Prnt/> */}
    {/* <SimpleApi/> */}
    {/* <ApiAsync/> */}
    {/* <DataAxios/> */}
    {/* <Example1/> */}
   <Pract/>
<Minishop/>
<Opt_Par/>
    </div>
  )
}

export default Home