import React, { useReducer } from 'react'

//step3//

let initialState=[]

function reducer(state,action) {
switch (action.type) {
    case "addItem":
        var existing=state.find(x=>x.id===action.payload.id); //finds product id//
        if (existing){
            return state.map((y)=>(
                y.id===action.payload.id) ? {...y,quantity:y.quantity+1}:y
            )
    
        }
       else { return [...state,{...action.payload,quantity:1}]}
    
       
        
    case "removeItem":
        return state.map((y)=>(
                y.id===action.payload.id) ? {...y,quantity:y.quantity-1}:y
            ).filter(y=>y.quantity>0)  //condition quantity not to be minus//



    case "clearCart":
        return []



    default:
        return state
}
}



function Minishop() {

//step1//
     let [cart,dispatch]= useReducer (reducer,initialState)


    //step2//

let products=[
    {id:1,pname:"jeans",price:"£20"},
    {id:2,pname:"tshirts",price:"£15"},
    {id:3,pname:"coats",price:"£40"},
]

  return (
    <>
    {
        products.map ((item)=>(
            <div>
                <button onClick={()=>dispatch({type:"addItem",payload:item})}>Add Item</button>
                <button onClick={()=>dispatch({type:"removeItem",payload:{id:item.id}})}>Remove Item</button>
            </div>
        ))
       
    }
        <button onClick={()=>dispatch({type:"clearCart"})}>Clear Cart</button>

    <div>
        {
            cart.length==0 ? (
                <p>Cart is empty</p>
            ) : (
                <div> 
                    {
                        cart.map ((product)=>
                        
                        <div>
                       <h2>{product.pname}</h2> 
                        <p>{product.price} x {product.quantity}</p>
                        </div>

                        )
                    }
                </div>
            )
        }
    </div>
    </>


  )
}

export default Minishop