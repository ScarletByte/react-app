import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../CartContext'

function ProductDetails() {

const [getProduct,setProduct] =useState([])
const [error,setError] =useState(null)
const [isAdding,setIsAdding] =useState(false)

var {productId} = useParams()
  
var {dispatch} = useCart()

useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(res =>
            {
            setProduct(res.data);
            console.log(res.data);
          })
        .catch(err => setError(err.message));
}, [productId]);

function addToCart(){
  if (isAdding)
    return
  setIsAdding(true)

  dispatch({type:"addItem",payload:getProduct})

  setTimeout(()=>setIsAdding(false),900)


}

 
if (error) return <p>Error {error.message}</p>

    return (
    <div>

        <div>
            <h1>{getProduct.title}</h1>
            <img className="w-[200px]" src={getProduct.image} alt="product image" />
            <b>{getProduct.price}</b>
            {/* <p>{getProduct.rating["rate"]}</p> */}
            <p>{getProduct.description}</p>
            
            <button onClick={addToCart} disabled={isAdding}>
              {isAdding ? "Adding..." : "Add to cart"}
            </button>
        </div>


    </div>
  )
}

export default ProductDetails