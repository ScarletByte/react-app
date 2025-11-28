function CartReducer(state,action) {
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

export default CartReducer