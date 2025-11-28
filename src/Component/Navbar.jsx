import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {ColourContext} from './ColourPalette/ColourContext'
import { useCart } from './CartContext'



function Navbar() {
  let {changeColour,selectedColour}=useContext (ColourContext)
  const [dropDownOpen,setDropDownOpen]=useState(false)

  const {cart}=useCart()
  const[cartCount,setCartCount]=useState(0)
  
  useEffect(() => {
    
  let totalItem=cart.reduce((total,item)=>total+item.quantity,0)
  setCartCount(totalItem)
  
  }, [cart])
  

  function handleTheColourChange(newColour) {
changeColour(newColour)
setDropDownOpen(false)
  }


const colours=[
  {name:"white",value:"white"}, {name:"purple",value:"purple"}, {name:"brown",value:"brown"}
]


  return (
    <div>
        {/* <ul>
            <li>
            <NavLink to="/">
                Home
            </NavLink>
            </li>

            <li>
            <NavLink to="/about">
                About
            </NavLink>
            </li>
            
        </ul> */
        
        }


  

<nav className="border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NavLink className="flex items-center space-x-3 rtl:space-x-reverse text-white">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </NavLink>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white dark:border-gray-700">
        <li>
          <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
        </li>

        <li>
          <NavLink to="/products" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Products</NavLink>
        </li>

        <li>
          <button onClick={() => setDropDownOpen(!dropDownOpen)
          }>
            Change Theme Colour
          </button>
          </li>

          <li>
          <NavLink to="/cart" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart ({cartCount})</NavLink>
        </li>

          <li>
          {
            dropDownOpen && (
              <ul>
                {colours.map((c) => (
                  <li key={c.value}>
                    <button onClick={() =>handleTheColourChange(c.value)} className={`${selectedColour === c.value}`}>
                      {c.name}
                      </button>
                  </li>

                ))}
              </ul>
            )
          }
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar