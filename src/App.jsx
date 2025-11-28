import './App.css'
import About from './Component/About'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
// import ChildA from './Component/Props/PropsDrilling/ChildA'
import { createContext, useState} from 'react'
import ColourProvider from './Component/ColourPalette/ColourContext'
import ProductDetails from './Component/Api/ProductDetails'
import DataAxios from './Component/Api/DataAxios'
import { CartProvider } from './Component/CartContext'
import Cart from './Component/Cart'
// import Checkout from './Component/Checkout'
import Demo from './Component/Demo'
import OrderSuccess from './Component/OrderSuccess'

//step 1//
// const data=createContext()

function App() {


  const [count,setCount]= useState(0)
  
  function inc(){
      setCount(count+1)
  }

    console.log("Optimise parent App.jsx");

  // const person= {
  //   name:"Athina",
  //   age:37
  // }
 

  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <ColourProvider>
       <Navbar/>
       {/* step 2 */}
       {/* <data.Provider value={person}>
          <ChildA/>
       </data.Provider> */}


       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<DataAxios/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product-details/:productId' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Demo/>}/>
        <Route path='/ordersuccess' element={<OrderSuccess/>}/>
       </Routes>
      </ColourProvider>
      </CartProvider>

      </BrowserRouter>
     
     <button onClick={inc}>App button</button>
    </>

  )
}

export default App
// step 3
// export {data}

