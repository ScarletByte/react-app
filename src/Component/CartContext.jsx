import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";

let CartContext=createContext()

export function useCart(){
    return useContext(CartContext)

}

export function CartProvider({children}){

    let [cart,dispatch]= useReducer (CartReducer,[])

    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {children}

        </CartContext.Provider>
    )

}

export default CartContext