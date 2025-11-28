import React, { useEffect } from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const {cart,dispatch}=useCart()
    
    useEffect(() => {
    document.title = 'Cart';
  }, []);

  const removeFromCart=(id)=>{
    dispatch({
        type:"removeItem",payload:{id}
    })
  }
  const totalItem=cart.reduce((total,item)=>total+item.price*item.quantity,0)

let navigate=useNavigate()

const proceedToCheckout=()=>{
navigate("/checkout")
}

  return (
<div>
    <h1>Shopping Cart</h1>
    {
        cart.length===0 ? (
            <p>Your cart is empty</p>
        ): (
            <div>
                {
                    cart.map((i)=>(
                        <div>
                        
                        <img src={i.image}/>
                        <p>{i.price}</p>
                        
                            <button onClick={()=>removeFromCart(i.id)}>Remove</button>

                        </div>
                    ))
                }


            </div>
        )
       
    }
        <div>
            <h3>Total items:{totalItem}</h3>

            <button onClick={proceedToCheckout
                
            }>Check out</button>
        </div>

</div>
  )
}

export default Cart