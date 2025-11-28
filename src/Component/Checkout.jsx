import React, { useState } from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    const {cart,dispatch}=useCart()
    const [userInfo,setUserinfo]=useState({
        name:"",email:"",address:"",paymentDetails:{
            cardNum:"",expDate:"",cvv:""
        }  
    })
    
    const [error,setError]=useState({
        cardNum:"",expDate:"",cvv:""

    })
    const navigate=useNavigate()
const totalItem=cart.reduce((total,item)=>total+item.price*item.quantity,0)

const submitForm=(a)=>{
    a.preventDefault()
    dispatch({type:"clearCart"})
    navigate("/ordersuccess",{
    state:{
        userInfo,cart,totalItem
    }        
    })
}





  return (
    <div>
        <h2>Checkout</h2>
        {
            cart.length===0 ? (
                <p>You cart is empty</p>
            ):(
                <div>
                    <h3>Review your order</h3>
                    <div>
                        {cart.map((item)=>(
                            <div>
                                    <img src={item.image} alt="" />
                                    <p>{item.title}</p>
                                    <p>Quantity:{item.quantity}</p>
                                    <p>Total:{item.price*item.quantity}</p>

                            </div>
                        )
                    )
                        }
                        <h3>Total amount:${totalItem}</h3>

                        <div>
                        <h2>Billing & Payment</h2>

<form id="paymentForm" onsubmit="return validateForm()">

  <div>
    <label for="name">Full Name:</label>
    <input type="text" id="name" placeholder="Enter your name"/>
  </div>

  <div>
    <label for="address">Address:</label>
    <input type="text" id="address" placeholder="Enter your address"/>
  </div>

  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" placeholder="Enter your email"/>
  </div>

  <h3>Payment Details</h3>

  <div>
    <label for="cardNumber">Card Number:</label>
    <input type="text" id="cardNumber" maxlength="19" placeholder="Card Number"/>
  </div>

  <div>
    <label for="expiry">Expiry (MM/YY):</label>
    <input type="text" id="expiry" maxlength="5" placeholder="MM/YY"/>
  </div>

  <div>
    <label for="cvv">CVV:</label>
    <input type="text" id="cvv" maxlength="4" placeholder="CVV"/>
  </div>

  <div>
    <input type="submit" value="Submit"/>
    <input type="reset" value="Reset"/>
  </div>

</form>
</div>
                    </div>
                </div>
                
            )
        }
        </div>
  )
}

export default Checkout