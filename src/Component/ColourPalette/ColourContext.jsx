import React, { Children, createContext, useState } from 'react'
const ColourContext= createContext()

function ColourProvider({children}) {
    const [colour, setColour]= useState("white")
    const [selectedColour,setSelectedcolour]= useState("white")

    function changeColour(newColour) {
        setColour(newColour)
        setSelectedcolour(newColour)

    }
     return (
    <ColourContext.Provider value={{colour,selectedColour,changeColour}}>
        {children}

    </ColourContext.Provider>
  )
}

export default ColourProvider
export {ColourContext}